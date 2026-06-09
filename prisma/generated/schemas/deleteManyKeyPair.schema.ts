import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairWhereInputObjectSchema as KeyPairWhereInputObjectSchema } from './objects/KeyPairWhereInput.schema';

export const KeyPairDeleteManySchema: z.ZodType<Prisma.KeyPairDeleteManyArgs> = z.object({ where: KeyPairWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairDeleteManyArgs>;

export const KeyPairDeleteManyZodSchema = z.object({ where: KeyPairWhereInputObjectSchema.optional() }).strict();