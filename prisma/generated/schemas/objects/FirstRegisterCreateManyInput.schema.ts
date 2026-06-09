import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.coerce.date()
}).strict();
export const FirstRegisterCreateManyInputObjectSchema: z.ZodType<Prisma.FirstRegisterCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterCreateManyInput>;
export const FirstRegisterCreateManyInputObjectZodSchema = makeSchema();
