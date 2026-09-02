import { exportPKCS8, exportSPKI, generateKeyPair, importPKCS8, SignJWT } from 'jose';
import { prisma } from './prisma';
import { randomBytes } from 'node:crypto';

export const rotateJWKS = async () => {
  const latestKey = await prisma.keyPair.findFirst({
    where: {
      status: 'active',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!latestKey || Date.now() - latestKey.createdAt.getTime() > 1000 * 60 * 60 * (24 * 7 - 1)) {
    const { privateKey, publicKey } = await generateKeyPair('RS256', { extractable: true });

    await prisma.$transaction([
      prisma.keyPair.updateMany({
        where: {
          status: 'writeoff',
        },
        data: {
          status: 'expired',
        },
      }),
      prisma.keyPair.updateMany({
        where: {
          status: 'active',
        },
        data: {
          status: 'writeoff',
        },
      }),
      prisma.keyPair.create({
        data: {
          privateKey: await exportPKCS8(privateKey),
          publicKey: await exportSPKI(publicKey),
        },
      }),
    ]);

    console.log('Generate new JWK key pair!');
  } else console.log('An active JWK has been found!');
};

export const generateJWT = async (userId: number, clientId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const secret = await prisma.keyPair.findFirst({
    where: {
      status: 'active',
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (!secret) {
    throw new Error('No active secret found');
  }

  const privateKey = await importPKCS8(secret.privateKey, secret.alghoritm);

  return new SignJWT({
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    avatar: user.avatar,
    role: user.role,
    status: user.accountStatus})
    .setProtectedHeader({
      alg: 'RS256',
      kid: secret.id.toString(),
    })
    .setIssuer('Gateway-137')
    .setSubject(user.id.toString())
    .setAudience(clientId.toString())
    .setExpirationTime('15m')
    .setIssuedAt()
    .sign(privateKey);
};

export const generateRefresh = async (userId: number, clientId: number) => {
  const token = randomBytes(32).toHex();

  await prisma.session.create({
    data: {
      token,
      userId,
      clientId,
    },
  });

  return token;
};
