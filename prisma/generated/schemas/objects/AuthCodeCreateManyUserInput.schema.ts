import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  clientId: z.number().int()
}).strict();
export const AuthCodeCreateManyUserInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateManyUserInput>;
export const AuthCodeCreateManyUserInputObjectZodSchema = makeSchema();
