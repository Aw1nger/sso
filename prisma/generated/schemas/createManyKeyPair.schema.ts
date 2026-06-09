import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairCreateManyInputObjectSchema as KeyPairCreateManyInputObjectSchema } from './objects/KeyPairCreateManyInput.schema';

export const KeyPairCreateManySchema: z.ZodType<Prisma.KeyPairCreateManyArgs> = z.object({ data: z.union([ KeyPairCreateManyInputObjectSchema, z.array(KeyPairCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairCreateManyArgs>;

export const KeyPairCreateManyZodSchema = z.object({ data: z.union([ KeyPairCreateManyInputObjectSchema, z.array(KeyPairCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();