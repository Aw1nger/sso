import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  clientId: z.number().int()
}).strict();
export const AuthCodeCreateManyInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateManyInput>;
export const AuthCodeCreateManyInputObjectZodSchema = makeSchema();
