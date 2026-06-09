import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  clientId: z.number().int()
}).strict();
export const AuthCodeUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AuthCodeUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeUncheckedCreateInput>;
export const AuthCodeUncheckedCreateInputObjectZodSchema = makeSchema();
