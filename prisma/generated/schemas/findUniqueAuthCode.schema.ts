import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeIncludeObjectSchema as AuthCodeIncludeObjectSchema } from './objects/AuthCodeInclude.schema';
import { AuthCodeWhereUniqueInputObjectSchema as AuthCodeWhereUniqueInputObjectSchema } from './objects/AuthCodeWhereUniqueInput.schema';

export const AuthCodeFindUniqueSchema: z.ZodType<Prisma.AuthCodeFindUniqueArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), where: AuthCodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AuthCodeFindUniqueArgs>;

export const AuthCodeFindUniqueZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), include: AuthCodeIncludeObjectSchema.optional(), where: AuthCodeWhereUniqueInputObjectSchema }).strict();