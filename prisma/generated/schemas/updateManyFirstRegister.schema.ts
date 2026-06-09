import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterUpdateManyMutationInputObjectSchema as FirstRegisterUpdateManyMutationInputObjectSchema } from './objects/FirstRegisterUpdateManyMutationInput.schema';
import { FirstRegisterWhereInputObjectSchema as FirstRegisterWhereInputObjectSchema } from './objects/FirstRegisterWhereInput.schema';

export const FirstRegisterUpdateManySchema: z.ZodType<Prisma.FirstRegisterUpdateManyArgs> = z.object({ data: FirstRegisterUpdateManyMutationInputObjectSchema, where: FirstRegisterWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterUpdateManyArgs>;

export const FirstRegisterUpdateManyZodSchema = z.object({ data: FirstRegisterUpdateManyMutationInputObjectSchema, where: FirstRegisterWhereInputObjectSchema.optional() }).strict();