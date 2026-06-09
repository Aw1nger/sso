import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterUpdateManyMutationInputObjectSchema as FirstRegisterUpdateManyMutationInputObjectSchema } from './objects/FirstRegisterUpdateManyMutationInput.schema';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';

export const FirstRegisterUpdateManyAndReturnSchema: z.ZodType<Prisma.FirstRegisterUpdateManyAndReturnArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(), data: FirstRegisterUpdateManyMutationInputObjectSchema, where: FirstRegisterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterUpdateManyAndReturnArgs>;

export const FirstRegisterUpdateManyAndReturnZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(), data: FirstRegisterUpdateManyMutationInputObjectSchema, where: FirstRegisterWhereInputObjectSchema.optional() }).strict();