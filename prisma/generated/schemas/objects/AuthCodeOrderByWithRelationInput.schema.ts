import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ClientOrderByWithRelationInputObjectSchema as ClientOrderByWithRelationInputObjectSchema } from './ClientOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  clientId: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  client: z.lazy(() => ClientOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AuthCodeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AuthCodeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeOrderByWithRelationInput>;
export const AuthCodeOrderByWithRelationInputObjectZodSchema = makeSchema();
