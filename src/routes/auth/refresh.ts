import { generateJWT, generateRefresh } from '@/src/lib/jwks';
import { prisma } from '@/src/lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import Elysia from 'elysia';
import z from 'zod';

export const RefreshRoute = new Elysia().post(
  '/refresh',
  async ({ cookie: { __Host_access_token, __Host_refresh_token }, status }) => {
    let session;

    try {
      session = await prisma.session.findUniqueOrThrow({
        where: {
          token: __Host_refresh_token.value,
        },
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
        return status(401, 'Unauthorized');
      }
      return status(500, 'Internal Server Error');
    }

    await prisma.session.delete({
      where: {
        token: __Host_refresh_token.value,
      },
    });

    __Host_access_token.set({
      value: await generateJWT(session.userId, 2),
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60,
    });

    __Host_refresh_token.set({
      value: await generateRefresh(session.userId, 2),
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return status(200, 'User verified successfully');
  },
  {
    cookie: z.object({
      __Host_refresh_token: z.string().length(16, 'refresh token not found'),
    }),
  },
);
