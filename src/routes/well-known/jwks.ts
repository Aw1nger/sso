import { prisma } from '@/src/lib/prisma';
import { Elysia } from 'elysia';
import { exportJWK, importSPKI } from 'jose';

export const JWKSRoute = new Elysia().get('/jwks.json', async () => {
  const rawKeys = await prisma.keyPair.findMany({
    where: {
      status: { in: ['active', 'writeoff'] },
    },
  });

  const keys = await Promise.all(
    rawKeys.map(async (key) => {
      const secret = await importSPKI(key.publicKey, key.alghoritm);
      const jwk = await exportJWK(secret);
      return {
        ...jwk,
        kid: key.id.toString(),
        alg: key.alghoritm,
        use: 'sig',
      };
    }),
  );

  return { keys };
});
