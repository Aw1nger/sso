import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const AuthCodeWhereUniqueInputObjectSchema: z.ZodType<Prisma.AuthCodeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeWhereUniqueInput>;
export const AuthCodeWhereUniqueInputObjectZodSchema = makeSchema();
