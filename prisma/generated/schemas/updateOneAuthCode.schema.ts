import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './objects/AuthCodeInclude.schema';
import { AuthCodeUpdateInputObjectSchema as AuthCodeUpdateInputObjectSchema } from './objects/AuthCodeUpdateInput.schema';
import { AuthCodeUncheckedUpdateInputObjectSchema as AuthCodeUncheckedUpdateInputObjectSchema } from './objects/AuthCodeUncheckedUpdateInput.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './objects/AuthCodeWhereUniqueInput.schema';

export const AuthCodeUpdateOneSchema: z.ZodType<Prisma.AuthCodeUpdateArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), data: z.union([AuthCodeUpdateInputObjectSchema, AuthCodeUncheckedUpdateInputObjectSchema]), where: AuthCodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthCodeUpdateArgs>;

export const AuthCodeUpdateOneZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), data: z.union([AuthCodeUpdateInputObjectSchema, AuthCodeUncheckedUpdateInputObjectSchema]), where: AuthCodeWhereUniqueInputObjectSchema }).strict();