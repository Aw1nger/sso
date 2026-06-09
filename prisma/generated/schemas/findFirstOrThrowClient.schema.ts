import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { ClientIncludeObjectSchema as ClientIncludeObjectSchema } from './objects/ClientInclude.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './objects/ClientOrderByWithRelationInput.schema';
import { ClientWhereInputObjectSchema as ClientWhereInputObjectSchema } from './objects/ClientWhereInput.schema';
import { ClientWhereUniqueInputObjectSchema as ClientWhereUniqueInputObjectSchema } from './objects/ClientWhereUniqueInput.schema';
import { ClientScalarFieldEnumSchema } from './enums/ClientScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClientFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ClientSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    secret: z.boolean().optional(),
    redirectUri: z.boolean().optional(),
    AuthCode: z.boolean().optional(),
    Session: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClientSelect>;

export const ClientFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    secret: z.boolean().optional(),
    redirectUri: z.boolean().optional(),
    AuthCode: z.boolean().optional(),
    Session: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClientFindFirstOrThrowSchema: z.ZodType<Prisma.ClientFindFirstOrThrowArgs> = z.object({ select: ClientFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClientIncludeObjectSchema.optional()), orderBy: z.union([ClientOrderByWithRelationInputObjectSchema, ClientOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientWhereInputObjectSchema.optional(), cursor: ClientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClientFindFirstOrThrowArgs>;

export const ClientFindFirstOrThrowZodSchema = z.object({ select: ClientFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClientIncludeObjectSchema.optional()), orderBy: z.union([ClientOrderByWithRelationInputObjectSchema, ClientOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClientWhereInputObjectSchema.optional(), cursor: ClientWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClientScalarFieldEnumSchema, ClientScalarFieldEnumSchema.array()]).optional() }).strict();