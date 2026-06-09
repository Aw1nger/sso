import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeCreateManyInputObjectSchema as AuthCodeCreateManyInputObjectSchema } from './objects/AuthCodeCreateManyInput.schema';

export const AuthCodeCreateManySchema: z.ZodType<Prisma.AuthCodeCreateManyArgs> = z.object({ data: z.union([ AuthCodeCreateManyInputObjectSchema, z.array(AuthCodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeCreateManyArgs>;

export const AuthCodeCreateManyZodSchema = z.object({ data: z.union([ AuthCodeCreateManyInputObjectSchema, z.array(AuthCodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();