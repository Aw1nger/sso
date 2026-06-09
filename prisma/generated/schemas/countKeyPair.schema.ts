import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairOrderByWithRelationInputObjectSchema as KeyPairOrderByWithRelationInputObjectSchema } from './objects/KeyPairOrderByWithRelationInput.schema';
import { KeyPairWhereInputObjectSchema as KeyPairWhereInputObjectSchema } from './objects/KeyPairWhereInput.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';
import { KeyPairCountAggregateInputObjectSchema as KeyPairCountAggregateInputObjectSchema } from './objects/KeyPairCountAggregateInput.schema';

export const KeyPairCountSchema: z.ZodType<Prisma.KeyPairCountArgs> = z.object({ orderBy: z.union([KeyPairOrderByWithRelationInputObjectSchema, KeyPairOrderByWithRelationInputObjectSchema.array()]).optional(), where: KeyPairWhereInputObjectSchema.optional(), cursor: KeyPairWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KeyPairCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairCountArgs>;

export const KeyPairCountZodSchema = z.object({ orderBy: z.union([KeyPairOrderByWithRelationInputObjectSchema, KeyPairOrderByWithRelationInputObjectSchema.array()]).optional(), where: KeyPairWhereInputObjectSchema.optional(), cursor: KeyPairWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), KeyPairCountAggregateInputObjectSchema ]).optional() }).strict();