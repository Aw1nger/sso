import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterUpdateInputObjectSchema as FirstRegisterUpdateInputObjectSchema } from './objects/FirstRegisterUpdateInput.schema';
import { FirstRegisterUncheckedUpdateInputObjectSchema as FirstRegisterUncheckedUpdateInputObjectSchema } from './objects/FirstRegisterUncheckedUpdateInput.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';

export const FirstRegisterUpdateOneSchema: z.ZodType<Prisma.FirstRegisterUpdateArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  data: z.union([FirstRegisterUpdateInputObjectSchema, FirstRegisterUncheckedUpdateInputObjectSchema]), where: FirstRegisterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FirstRegisterUpdateArgs>;

export const FirstRegisterUpdateOneZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  data: z.union([FirstRegisterUpdateInputObjectSchema, FirstRegisterUncheckedUpdateInputObjectSchema]), where: FirstRegisterWhereUniqueInputObjectSchema }).strict();