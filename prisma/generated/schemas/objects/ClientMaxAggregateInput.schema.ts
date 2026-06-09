import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  secret: z.literal(true).optional()
}).strict();
export const ClientMaxAggregateInputObjectSchema: z.ZodType<Prisma.ClientMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientMaxAggregateInputType>;
export const ClientMaxAggregateInputObjectZodSchema = makeSchema();
