import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';

export const KeyPairDeleteOneSchema: z.ZodType<Prisma.KeyPairDeleteArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KeyPairDeleteArgs>;

export const KeyPairDeleteOneZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict();