import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string(),
  username: z.string(),
  firstname: z.string().optional().nullable(),
  lastname: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  aproved: z.boolean().optional()
}).strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
