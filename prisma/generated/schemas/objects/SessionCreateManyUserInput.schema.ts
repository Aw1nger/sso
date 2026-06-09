import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  token: z.string(),
  clientId: z.number().int(),
  revoked: z.boolean().optional()
}).strict();
export const SessionCreateManyUserInputObjectSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyUserInput>;
export const SessionCreateManyUserInputObjectZodSchema = makeSchema();
