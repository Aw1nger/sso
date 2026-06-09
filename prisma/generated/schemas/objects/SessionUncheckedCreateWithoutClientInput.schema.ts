import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  token: z.string(),
  userId: z.number().int(),
  revoked: z.boolean().optional()
}).strict();
export const SessionUncheckedCreateWithoutClientInputObjectSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedCreateWithoutClientInput>;
export const SessionUncheckedCreateWithoutClientInputObjectZodSchema = makeSchema();
