import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCountOutputTypeCountAuthCodeArgsObjectSchema as ClientCountOutputTypeCountAuthCodeArgsObjectSchema } from './ClientCountOutputTypeCountAuthCodeArgs.schema';
import { ClientCountOutputTypeCountSessionArgsObjectSchema as ClientCountOutputTypeCountSessionArgsObjectSchema } from './ClientCountOutputTypeCountSessionArgs.schema'

const makeSchema = () => z.object({
  AuthCode: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountAuthCodeArgsObjectSchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => ClientCountOutputTypeCountSessionArgsObjectSchema)]).optional()
}).strict();
export const ClientCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClientCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClientCountOutputTypeSelect>;
export const ClientCountOutputTypeSelectObjectZodSchema = makeSchema();
