import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairCreateManyInputObjectSchema as KeyPairCreateManyInputObjectSchema } from './objects/KeyPairCreateManyInput.schema';

export const KeyPairCreateManyAndReturnSchema: z.ZodType<Prisma.KeyPairCreateManyAndReturnArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(), data: z.union([ KeyPairCreateManyInputObjectSchema, z.array(KeyPairCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairCreateManyAndReturnArgs>;

export const KeyPairCreateManyAndReturnZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(), data: z.union([ KeyPairCreateManyInputObjectSchema, z.array(KeyPairCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();