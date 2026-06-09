import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.coerce.date()
}).strict();
export const FirstRegisterUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FirstRegisterUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterUncheckedCreateInput>;
export const FirstRegisterUncheckedCreateInputObjectZodSchema = makeSchema();
