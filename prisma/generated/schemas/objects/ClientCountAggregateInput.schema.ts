import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  secret: z.literal(true).optional(),
  redirectUri: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ClientCountAggregateInputObjectSchema: z.ZodType<Prisma.ClientCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountAggregateInputType>;
export const ClientCountAggregateInputObjectZodSchema = makeSchema();
