import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  token: z.string(),
  userId: z.number().int(),
  revoked: z.boolean().optional()
}).strict();
export const SessionCreateManyClientInputObjectSchema: z.ZodType<Prisma.SessionCreateManyClientInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyClientInput>;
export const SessionCreateManyClientInputObjectZodSchema = makeSchema();
