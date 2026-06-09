import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './objects/AuthCodeWhereInput.schema';

export const AuthCodeDeleteManySchema: z.ZodType<Prisma.AuthCodeDeleteManyArgs> = z.object({ where: AuthCodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeDeleteManyArgs>;

export const AuthCodeDeleteManyZodSchema = z.object({ where: AuthCodeWhereInputObjectSchema.optional() }).strict();