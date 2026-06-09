import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  revoked: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithRelationInput>;
export const SessionOrderByWithRelationInputObjectZodSchema = makeSchema();
