import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairOrderByWithRelationInputObjectSchema as KeyPairOrderByWithRelationInputObjectSchema } from './objects/KeyPairOrderByWithRelationInput.schema';
import { KeyPairWhereInputObjectSchema as KeyPairWhereInputObjectSchema } from './objects/KeyPairWhereInput.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';
import { KeyPairScalarFieldEnumSchema } from './enums/KeyPairScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const KeyPairFindManySelectSchema: z.ZodType<Prisma.KeyPairSelect> = z.object({
    id: z.boolean().optional(),
    publicKey: z.boolean().optional(),
    privateKey: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    alghoritm: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.KeyPairSelect>;

export const KeyPairFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    publicKey: z.boolean().optional(),
    privateKey: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    alghoritm: z.boolean().optional(),
    status: z.boolean().optional()
  }).strict();

export const KeyPairFindManySchema: z.ZodType<Prisma.KeyPairFindManyArgs> = z.object({ select: KeyPairFindManySelectSchema.optional(),  orderBy: z.union([KeyPairOrderByWithRelationInputObjectSchema, KeyPairOrderByWithRelationInputObjectSchema.array()]).optional(), where: KeyPairWhereInputObjectSchema.optional(), cursor: KeyPairWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KeyPairScalarFieldEnumSchema, KeyPairScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.KeyPairFindManyArgs>;

export const KeyPairFindManyZodSchema = z.object({ select: KeyPairFindManySelectSchema.optional(),  orderBy: z.union([KeyPairOrderByWithRelationInputObjectSchema, KeyPairOrderByWithRelationInputObjectSchema.array()]).optional(), where: KeyPairWhereInputObjectSchema.optional(), cursor: KeyPairWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([KeyPairScalarFieldEnumSchema, KeyPairScalarFieldEnumSchema.array()]).optional() }).strict();