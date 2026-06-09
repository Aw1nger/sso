import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairUpdateInputObjectSchema as KeyPairUpdateInputObjectSchema } from './objects/KeyPairUpdateInput.schema';
import { KeyPairUncheckedUpdateInputObjectSchema as KeyPairUncheckedUpdateInputObjectSchema } from './objects/KeyPairUncheckedUpdateInput.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';

export const KeyPairUpdateOneSchema: z.ZodType<Prisma.KeyPairUpdateArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  data: z.union([KeyPairUpdateInputObjectSchema, KeyPairUncheckedUpdateInputObjectSchema]), where: KeyPairWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KeyPairUpdateArgs>;

export const KeyPairUpdateOneZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  data: z.union([KeyPairUpdateInputObjectSchema, KeyPairUncheckedUpdateInputObjectSchema]), where: KeyPairWhereUniqueInputObjectSchema }).strict();