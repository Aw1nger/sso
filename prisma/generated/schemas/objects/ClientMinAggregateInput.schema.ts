import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  secret: z.literal(true).optional()
}).strict();
export const ClientMinAggregateInputObjectSchema: z.ZodType<Prisma.ClientMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientMinAggregateInputType>;
export const ClientMinAggregateInputObjectZodSchema = makeSchema();
