import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';
import { FirstRegisterCreateInputObjectSchema as FirstRegisterCreateInputObjectSchema } from './objects/FirstRegisterCreateInput.schema';
import { FirstRegisterUncheckedCreateInputObjectSchema as FirstRegisterUncheckedCreateInputObjectSchema } from './objects/FirstRegisterUncheckedCreateInput.schema';
import { FirstRegisterUpdateInputObjectSchema as FirstRegisterUpdateInputObjectSchema } from './objects/FirstRegisterUpdateInput.schema';
import { FirstRegisterUncheckedUpdateInputObjectSchema as FirstRegisterUncheckedUpdateInputObjectSchema } from './objects/FirstRegisterUncheckedUpdateInput.schema';

export const FirstRegisterUpsertOneSchema: z.ZodType<Prisma.FirstRegisterUpsertArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema, create: z.union([ FirstRegisterCreateInputObjectSchema, FirstRegisterUncheckedCreateInputObjectSchema ]), update: z.union([ FirstRegisterUpdateInputObjectSchema, FirstRegisterUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FirstRegisterUpsertArgs>;

export const FirstRegisterUpsertOneZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema, create: z.union([ FirstRegisterCreateInputObjectSchema, FirstRegisterUncheckedCreateInputObjectSchema ]), update: z.union([ FirstRegisterUpdateInputObjectSchema, FirstRegisterUncheckedUpdateInputObjectSchema ]) }).strict();