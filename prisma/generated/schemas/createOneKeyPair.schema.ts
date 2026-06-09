import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairCreateInputObjectSchema as KeyPairCreateInputObjectSchema } from './objects/KeyPairCreateInput.schema';
import { KeyPairUncheckedCreateInputObjectSchema as KeyPairUncheckedCreateInputObjectSchema } from './objects/KeyPairUncheckedCreateInput.schema';

export const KeyPairCreateOneSchema: z.ZodType<Prisma.KeyPairCreateArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  data: z.union([KeyPairCreateInputObjectSchema, KeyPairUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.KeyPairCreateArgs>;

export const KeyPairCreateOneZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  data: z.union([KeyPairCreateInputObjectSchema, KeyPairUncheckedCreateInputObjectSchema]) }).strict();