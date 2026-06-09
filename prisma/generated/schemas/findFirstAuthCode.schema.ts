import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './objects/AuthCodeInclude.schema';
import { AuthCodeOrderByWithRelationInputObjectSchema as AuthCodeOrderByWithRelationInputObjectSchema } from './objects/AuthCodeOrderByWithRelationInput.schema';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './objects/AuthCodeWhereInput.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './objects/AuthCodeWhereUniqueInput.schema';
import { AuthCodeScalarFieldEnumSchema } from './enums/AuthCodeScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthCodeFindFirstSelectSchema: z.ZodType<Prisma.AuthCodeSelect> = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    clientId: z.boolean().optional(),
    user: z.boolean().optional(),
    client: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AuthCodeSelect>;

export const AuthCodeFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    code: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    clientId: z.boolean().optional(),
    user: z.boolean().optional(),
    client: z.boolean().optional()
  }).strict();

export const AuthCodeFindFirstSchema: z.ZodType<Prisma.AuthCodeFindFirstArgs> = z.object({ select: AuthCodeFindFirstSelectSchema.optional(), include: z.lazy(() => AuthCodeIncludeObjectSchema.optional()), orderBy: z.union([AuthCodeOrderByWithRelationInputObjectSchema, AuthCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthCodeWhereInputObjectSchema.optional(), cursor: AuthCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthCodeScalarFieldEnumSchema, AuthCodeScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeFindFirstArgs>;

export const AuthCodeFindFirstZodSchema = z.object({ select: AuthCodeFindFirstSelectSchema.optional(), include: z.lazy(() => AuthCodeIncludeObjectSchema.optional()), orderBy: z.union([AuthCodeOrderByWithRelationInputObjectSchema, AuthCodeOrderByWithRelationInputObjectSchema.array()]).optional(), where: AuthCodeWhereInputObjectSchema.optional(), cursor: AuthCodeWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AuthCodeScalarFieldEnumSchema, AuthCodeScalarFieldEnumSchema.array()]).optional() }).strict();