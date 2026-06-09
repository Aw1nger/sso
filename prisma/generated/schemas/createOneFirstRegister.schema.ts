import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterCreateInputObjectSchema as FirstRegisterCreateInputObjectSchema } from './objects/FirstRegisterCreateInput.schema';
import { FirstRegisterUncheckedCreateInputObjectSchema as FirstRegisterUncheckedCreateInputObjectSchema } from './objects/FirstRegisterUncheckedCreateInput.schema';

export const FirstRegisterCreateOneSchema: z.ZodType<Prisma.FirstRegisterCreateArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  data: z.union([FirstRegisterCreateInputObjectSchema, FirstRegisterUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FirstRegisterCreateArgs>;

export const FirstRegisterCreateOneZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  data: z.union([FirstRegisterCreateInputObjectSchema, FirstRegisterUncheckedCreateInputObjectSchema]) }).strict();