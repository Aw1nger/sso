import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { FirstRegisterSelectObjectSchema as FirstRegisterSelectObjectSchema } from './objects/FirstRegisterSelect.schema';
import { FirstRegisterCreateManyInputObjectSchema as FirstRegisterCreateManyInputObjectSchema } from './objects/FirstRegisterCreateManyInput.schema';

export const FirstRegisterCreateManyAndReturnSchema: z.ZodType<Prisma.FirstRegisterCreateManyAndReturnArgs> = z.object({ select: FirstRegisterSelectObjectSchema.optional(), data: z.union([ FirstRegisterCreateManyInputObjectSchema, z.array(FirstRegisterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FirstRegisterCreateManyAndReturnArgs>;

export const FirstRegisterCreateManyAndReturnZodSchema = z.object({ select: FirstRegisterSelectObjectSchema.optional(), data: z.union([ FirstRegisterCreateManyInputObjectSchema, z.array(FirstRegisterCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();