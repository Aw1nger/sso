import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterOrderByWithRelationInputObjectSchema as FirstRegisterOrderByWithRelationInputObjectSchema } from './objects/FirstRegisterOrderByWithRelationInput.schema';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';
import { FirstRegisterScalarFieldEnumSchema } from './enums/FirstRegisterScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FirstRegisterFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FirstRegisterSelect> = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    code: z.boolean().optional(),
    expiresAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FirstRegisterSelect>;

export const FirstRegisterFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    email: z.boolean().optional(),
    username: z.boolean().optional(),
    code: z.boolean().optional(),
    expiresAt: z.boolean().optional()
  }).strict();

export const FirstRegisterFindFirstOrThrowSchema: z.ZodType<Prisma.FirstRegisterFindFirstOrThrowArgs> = z.object({ select: FirstRegisterFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FirstRegisterScalarFieldEnumSchema, FirstRegisterScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterFindFirstOrThrowArgs>;

export const FirstRegisterFindFirstOrThrowZodSchema = z.object({ select: FirstRegisterFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([FirstRegisterOrderByWithRelationInputObjectSchema, FirstRegisterOrderByWithRelationInputObjectSchema.array()]).optional(), where: FirstRegisterWhereInputObjectSchema.optional(), cursor: FirstRegisterWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FirstRegisterScalarFieldEnumSchema, FirstRegisterScalarFieldEnumSchema.array()]).optional() }).strict();