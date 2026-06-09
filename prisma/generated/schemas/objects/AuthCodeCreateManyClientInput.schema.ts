import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  userId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AuthCodeCreateManyClientInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateManyClientInput>;
export const AuthCodeCreateManyClientInputObjectZodSchema = makeSchema();
