import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterOrderByWithRelationInputObjectSchema as FirstRegisterOrderByWithRelationInputObjectSchema } from './objects/FirstRegisterOrderByWithRelationInput.schema';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';
import { FirstRegisterScalarFieldEnumSchema } from './enums/FirstRegisterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FirstRegisterFindManySelectSchema: z.ZodType<Prisma.FirstRegisterSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    code: z.boolean().optional(),
    expiresAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FirstRegisterSelect>;

export const FirstRegisterFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    code: z.boolean().optional(),
    expiresAt: z.boolean().optional()
  }).strict();

export const FirstRegisterFindManySchema: z.ZodType<Prisma.FirstRegisterFindManyArgs> = z.object({ select: FirstRegisterFindManySelectSchema.optional(),  orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FirstRegisterScalarFieldEnumSchema, FirstRegisterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterFindManyArgs>;

export const FirstRegisterFindManyZodSchema = z.object({ select: FirstRegisterFindManySelectSchema.optional(),  orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FirstRegisterScalarFieldEnumSchema, FirstRegisterScalarFieldEnumSchema.array()]).optional() }).strict();