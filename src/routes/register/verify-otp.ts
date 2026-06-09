import { hash256 } from '@/src/lib/crypto';
import { generateJWT, generateRefresh } from '@/src/lib/jwks';
import { prisma } from '@/src/lib/prisma';
import Elysia from 'elysia';
import z from 'zod';

export const VerifyOTPRoute = new Elysia().post(
  '/verify-otp',
  async ({ body, status, cookie: { __Host_access_token, __Host_refresh_token } }) => {
    const rawUser = await prisma.firstRegister.findFirst({
      where: { email: body.email, code: await hash256(body.otp) },
    });

    if (!rawUser || rawUser.expiresAt < new Date()) return status(400, 'Invalid email or OTP');

    const [user] = await prisma.$transaction([
      prisma.user.create({
        data: {
          email: rawUser.email,
          username: rawUser.username,
        },
      }),
      prisma.firstRegister.deleteMany({
        where: { email: rawUser.email },
      }),
    ]);

    __Host_access_token.set({
      value: await generateJWT(user.id, 2),
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 15 * 60,
    });
    __Host_refresh_token.set({
      value: await generateRefresh(user.id, 2),
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60,
    });

    return status(200, 'User verified successfully');
  },
  {
    body: z.object({
      email: z.email(),
      otp: z.string().min(6).max(6),
    }),
  },
);
