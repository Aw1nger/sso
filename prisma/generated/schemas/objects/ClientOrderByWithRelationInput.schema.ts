import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AuthCodeOrderByRelationAggregateInputObjectSchema as AuthCodeOrderByRelationAggregateInputObjectSchema } from './AuthCodeOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  secret: SortOrderSchema.optional(),
  redirectUri: SortOrderSchema.optional(),
  AuthCode: z.lazy(() => AuthCodeOrderByRelationAggregateInputObjectSchema).optional(),
  Session: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClientOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClientOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientOrderByWithRelationInput>;
export const ClientOrderByWithRelationInputObjectZodSchema = makeSchema();
