import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterCreateManyInputObjectSchema as FirstRegisterCreateManyInputObjectSchema } from './objects/FirstRegisterCreateManyInput.schema';

export const FirstRegisterCreateManySchema: z.ZodType<Prisma.FirstRegisterCreateManyArgs> = z.object({ data: z.union([ FirstRegisterCreateManyInputObjectSchema, z.array(FirstRegisterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterCreateManyArgs>;

export const FirstRegisterCreateManyZodSchema = z.object({ data: z.union([ FirstRegisterCreateManyInputObjectSchema, z.array(FirstRegisterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();