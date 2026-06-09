import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  email: z.string(),
  username: z.string(),
  code: z.string(),
  expiresAt: z.coerce.date()
}).strict();
export const FirstRegisterCreateInputObjectSchema: z.ZodType<Prisma.FirstRegisterCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FirstRegisterCreateInput>;
export const FirstRegisterCreateInputObjectZodSchema = makeSchema();
