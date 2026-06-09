import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';

export const FirstRegisterDeleteManySchema: z.ZodType<Prisma.FirstRegisterDeleteManyArgs> = z.object({ where: FirstRegisterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterDeleteManyArgs>;

export const FirstRegisterDeleteManyZodSchema = z.object({ where: FirstRegisterWhereInputObjectSchema.optional() }).strict();