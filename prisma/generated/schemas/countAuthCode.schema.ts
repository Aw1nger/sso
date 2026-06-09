import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeOrderByWithRelationInputObjectSchema as AuthCodeOrderByWithRelationInputObjectSchema } from './objects/AuthCodeOrderByWithRelationInput.schema';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './objects/AuthCodeWhereInput.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './objects/AuthCodeWhereUniqueInput.schema';
import { AuthCodeCountAggregateInputObjectSchema as AuthCodeCountAggregateInputObjectSchema } from './objects/AuthCodeCountAggregateInput.schema';

export const AuthCodeCountSchema: z.ZodType<Prisma.AuthCodeCountArgs> = z.object({ orderBy: z.union([AuthCodeOrderByWithRelationInputObjectSchema, AuthCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthCodeWhereInputObjectSchema.optional(), cursor: AuthCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuthCodeCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeCountArgs>;

export const AuthCodeCountZodSchema = z.object({ orderBy: z.union([AuthCodeOrderByWithRelationInputObjectSchema, AuthCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthCodeWhereInputObjectSchema.optional(), cursor: AuthCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AuthCodeCountAggregateInputObjectSchema ]).optional() }).strict();