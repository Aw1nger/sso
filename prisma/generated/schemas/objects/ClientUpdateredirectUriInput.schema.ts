import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const ClientUpdateredirectUriInputObjectSchema: z.ZodType<Prisma.ClientUpdateredirectUriInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientUpdateredirectUriInput>;
export const ClientUpdateredirectUriInputObjectZodSchema = makeSchema();
