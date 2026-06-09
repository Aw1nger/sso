import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeCreateManyInputObjectSchema as AuthCodeCreateManyInputObjectSchema } from './objects/AuthCodeCreateManyInput.schema';

export const AuthCodeCreateManyAndReturnSchema: z.ZodType<Prisma.AuthCodeCreateManyAndReturnArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), data: z.union([ AuthCodeCreateManyInputObjectSchema, z.array(AuthCodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeCreateManyAndReturnArgs>;

export const AuthCodeCreateManyAndReturnZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), data: z.union([ AuthCodeCreateManyInputObjectSchema, z.array(AuthCodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();