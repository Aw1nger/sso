import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './objects/AuthCodeInclude.schema';
import { AuthCodeCreateInputObjectSchema as AuthCodeCreateInputObjectSchema } from './objects/AuthCodeCreateInput.schema';
import { AuthCodeUncheckedCreateInputObjectSchema as AuthCodeUncheckedCreateInputObjectSchema } from './objects/AuthCodeUncheckedCreateInput.schema';

export const AuthCodeCreateOneSchema: z.ZodType<Prisma.AuthCodeCreateArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), data: z.union([AuthCodeCreateInputObjectSchema, AuthCodeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AuthCodeCreateArgs>;

export const AuthCodeCreateOneZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), data: z.union([AuthCodeCreateInputObjectSchema, AuthCodeUncheckedCreateInputObjectSchema]) }).strict();