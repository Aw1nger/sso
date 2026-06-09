import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './objects/AuthCodeInclude.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './objects/AuthCodeWhereUniqueInput.schema';
import { AuthCodeCreateInputObjectSchema as AuthCodeCreateInputObjectSchema } from './objects/AuthCodeCreateInput.schema';
import { AuthCodeUncheckedCreateInputObjectSchema as AuthCodeUncheckedCreateInputObjectSchema } from './objects/AuthCodeUncheckedCreateInput.schema';
import { AuthCodeUpdateInputObjectSchema as AuthCodeUpdateInputObjectSchema } from './objects/AuthCodeUpdateInput.schema';
import { AuthCodeUncheckedUpdateInputObjectSchema as AuthCodeUncheckedUpdateInputObjectSchema } from './objects/AuthCodeUncheckedUpdateInput.schema';

export const AuthCodeUpsertOneSchema: z.ZodType<Prisma.AuthCodeUpsertArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), where: AuthCodeWhereUniqueInputObjectSchema, create: z.union([ AuthCodeCreateInputObjectSchema, AuthCodeUncheckedCreateInputObjectSchema ]), update: z.union([ AuthCodeUpdateInputObjectSchema, AuthCodeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AuthCodeUpsertArgs>;

export const AuthCodeUpsertOneZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), where: AuthCodeWhereUniqueInputObjectSchema, create: z.union([ AuthCodeCreateInputObjectSchema, AuthCodeUncheckedCreateInputObjectSchema ]), update: z.union([ AuthCodeUpdateInputObjectSchema, AuthCodeUncheckedUpdateInputObjectSchema ]) }).strict();