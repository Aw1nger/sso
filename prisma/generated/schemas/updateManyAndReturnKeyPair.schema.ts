import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairUpdateManyMutationInputObjectSchema as KeyPairUpdateManyMutationInputObjectSchema } from './objects/KeyPairUpdateManyMutationInput.schema';
import { KeyPairWhereInputObjectSchema as KeyPairWhereInputObjectSchema } from './objects/KeyPairWhereInput.schema';

export const KeyPairUpdateManyAndReturnSchema: z.ZodType<Prisma.KeyPairUpdateManyAndReturnArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(), data: KeyPairUpdateManyMutationInputObjectSchema, where: KeyPairWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairUpdateManyAndReturnArgs>;

export const KeyPairUpdateManyAndReturnZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(), data: KeyPairUpdateManyMutationInputObjectSchema, where: KeyPairWhereInputObjectSchema.optional() }).strict();