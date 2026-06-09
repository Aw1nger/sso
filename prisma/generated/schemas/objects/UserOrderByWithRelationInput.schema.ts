import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AuthCodeOrderByRelationAggregateInputObjectSchema as AuthCodeOrderByRelationAggregateInputObjectSchema } from './AuthCodeOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema as SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  username: SortOrderSchema.optional(),
  firstname: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  lastname: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  avatar: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aproved: SortOrderSchema.optional(),
  AuthCodes: z.lazy(() => AuthCodeOrderByRelationAggregateInputObjectSchema).optional(),
  Session: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
