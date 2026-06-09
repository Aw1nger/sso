import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterWhereUniqueInputObjectSchema as FirstRegisterWhereUniqueInputObjectSchema } from './objects/FirstRegisterWhereUniqueInput.schema';

export const FirstRegisterFindUniqueOrThrowSchema: z.ZodType<Prisma.FirstRegisterFindUniqueOrThrowArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FirstRegisterFindUniqueOrThrowArgs>;

export const FirstRegisterFindUniqueOrThrowZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(),  where: FirstRegisterWhereUniqueInputObjectSchema }).strict();