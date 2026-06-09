import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AuthCodeSelectObjectSchema as AuthCodeSelectObjectSchema } from './objects/AuthCodeSelect.schema';
import { AuthCodeUpdateManyMutationInputObjectSchema as AuthCodeUpdateManyMutationInputObjectSchema } from './objects/AuthCodeUpdateManyMutationInput.schema';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './objects/AuthCodeWhereInput.schema';

export const AuthCodeUpdateManyAndReturnSchema: z.ZodType<Prisma.AuthCodeUpdateManyAndReturnArgs> = z.object({ select: AuthCodeSelectObjectSchema.optional(), data: AuthCodeUpdateManyMutationInputObjectSchema, where: AuthCodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AuthCodeUpdateManyAndReturnArgs>;

export const AuthCodeUpdateManyAndReturnZodSchema = z.object({ select: AuthCodeSelectObjectSchema.optional(), data: AuthCodeUpdateManyMutationInputObjectSchema, where: AuthCodeWhereInputObjectSchema.optional() }).strict();