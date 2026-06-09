import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';

export const FirstRegisterFindUniqueSchema: z.ZodType<Prisma.FirstRegisterFindUniqueArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FirstRegisterFindUniqueArgs>;

export const FirstRegisterFindUniqueZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict();