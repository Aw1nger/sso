import * as z from 'zod';
export const KeyPairFindFirstResultSchema = z.nullable(z.object({
  id: z.number().int(),
  publicKey: z.string(),
  privateKey: z.string(),
  createdAt: z.date(),
  alghoritm: z.string(),
  status: z.unknown()
}));