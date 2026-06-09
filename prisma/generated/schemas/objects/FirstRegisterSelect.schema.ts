import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  username: z.boolean().optional(),
  code: z.boolean().optional(),
  expiresAt: z.boolean().optional()
}).strict();
export const FirstRegisterSelectObjectSchema: z.ZodType<Prisma.FirstRegisterSelect> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterSelect>;
export const FirstRegisterSelectObjectZodSchema = makeSchema();
