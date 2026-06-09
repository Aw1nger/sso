import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeUpdateManyMutationInputObjectSchema as AuthCodeUpdateManyMutationInputObjectSchema } from './objects/AuthCodeUpdateManyMutationInput.schema';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './objects/AuthCodeWhereInput.schema';

export const AuthCodeUpdateManySchema: z.ZodType<Prisma.AuthCodeUpdateManyArgs> = z.object({ data: AuthCodeUpdateManyMutationInputObjectSchema, where: AuthCodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeUpdateManyArgs>;

export const AuthCodeUpdateManyZodSchema = z.object({ data: AuthCodeUpdateManyMutationInputObjectSchema, where: AuthCodeWhereInputObjectSchema.optional() }).strict();