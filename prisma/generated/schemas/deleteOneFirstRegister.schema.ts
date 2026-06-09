import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';

export const FirstRegisterDeleteOneSchema: z.ZodType<Prisma.FirstRegisterDeleteArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FirstRegisterDeleteArgs>;

export const FirstRegisterDeleteOneZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict();