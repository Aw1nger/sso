import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';

export const KeyPairFindUniqueSchema: z.ZodType<Prisma.KeyPairFindUniqueArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KeyPairFindUniqueArgs>;

export const KeyPairFindUniqueZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict();