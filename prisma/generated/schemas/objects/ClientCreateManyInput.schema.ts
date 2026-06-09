import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateredirectUriInputObjectSchema as ClientCreateredirectUriInputObjectSchema } from './ClientCreateredirectUriInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  secret: z.string(),
  redirectUri: z.union([z.lazy(() => ClientCreateredirectUriInputObjectSchema), z.string().array()]).optional()
}).strict();
export const ClientCreateManyInputObjectSchema: z.ZodType<Prisma.ClientCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientCreateManyInput>;
export const ClientCreateManyInputObjectZodSchema = makeSchema();
