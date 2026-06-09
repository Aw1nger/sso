import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';
import { KeyPairCreateInputObjectSchema as KeyPairCreateInputObjectSchema } from './objects/KeyPairCreateInput.schema';
import { KeyPairUncheckedCreateInputObjectSchema as KeyPairUncheckedCreateInputObjectSchema } from './objects/KeyPairUncheckedCreateInput.schema';
import { KeyPairUpdateInputObjectSchema as KeyPairUpdateInputObjectSchema } from './objects/KeyPairUpdateInput.schema';
import { KeyPairUncheckedUpdateInputObjectSchema as KeyPairUncheckedUpdateInputObjectSchema } from './objects/KeyPairUncheckedUpdateInput.schema';

export const KeyPairUpsertOneSchema: z.ZodType<Prisma.KeyPairUpsertArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema, create: z.union([ KeyPairCreateInputObjectSchema, KeyPairUncheckedCreateInputObjectSchema ]), update: z.union([ KeyPairUpdateInputObjectSchema, KeyPairUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.KeyPairUpsertArgs>;

export const KeyPairUpsertOneZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema, create: z.union([ KeyPairCreateInputObjectSchema, KeyPairUncheckedCreateInputObjectSchema ]), update: z.union([ KeyPairUpdateInputObjectSchema, KeyPairUncheckedUpdateInputObjectSchema ]) }).strict();