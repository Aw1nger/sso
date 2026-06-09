import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterOrderByWithRelationInputObjectSchema as FirstRegisterOrderByWithRelationInputObjectSchema } from './objects/FirstRegisterOrderByWithRelationInput.schema';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';
import { FirstRegisterCountAggregateInputObjectSchema as FirstRegisterCountAggregateInputObjectSchema } from './objects/FirstRegisterCountAggregateInput.schema';

export const FirstRegisterCountSchema: z.ZodType<Prisma.FirstRegisterCountArgs> = z.object({ orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FirstRegisterCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterCountArgs>;

export const FirstRegisterCountZodSchema = z.object({ orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FirstRegisterCountAggregateInputObjectSchema ]).optional() }).strict();