import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairUpdateManyMutationInputObjectSchema as KeyPairUpdateManyMutationInputObjectSchema } from './objects/KeyPairUpdateManyMutationInput.schema';
import { KeyPairWhereInputObjectSchema as KeyPairWhereInputObjectSchema } from './objects/KeyPairWhereInput.schema';

export const KeyPairUpdateManySchema: z.ZodType<Prisma.KeyPairUpdateManyArgs> = z.object({ data: KeyPairUpdateManyMutationInputObjectSchema, where: KeyPairWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairUpdateManyArgs>;

export const KeyPairUpdateManyZodSchema = z.object({ data: KeyPairUpdateManyMutationInputObjectSchema, where: KeyPairWhereInputObjectSchema.optional() }).strict();