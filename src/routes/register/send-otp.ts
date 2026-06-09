import { prisma } from '@/src/lib/prisma';
import { getOTP } from '@/src/lib/random-int';
import Elysia from 'elysia';
import z from 'zod';
import { sendOTP } from '@/src/lib/email';
import { hash256 } from '@/src/lib/crypto';

export const SendOTPRoute = new Elysia().post(
  '/send-otp',
  async ({ body: { email, username }, status }) => {
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (userExists) {
      return status(409, 'Такой пользователь уже существует');
    }
    const code = getOTP();

    await prisma.firstRegister.create({
      data: {
        email,
        username,
        code: await hash256(code),
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
      },
    });

    await sendOTP(email, code);

    return status(200, 'Success!');
  },
  {
    tags: ['register'],
    body: z.object({
      email: z.email({ error: 'Invalid email' }),
      username: z.string().min(2).max(32),
    }),
    response: {
      200: z.literal('Success!'),
      409: z.literal('Такой пользователь уже существует'),
    },
  },
);
