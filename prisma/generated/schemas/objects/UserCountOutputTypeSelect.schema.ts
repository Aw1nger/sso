import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserCountOutputTypeCountAuthCodesArgsObjectSchema as UserCountOutputTypeCountAuthCodesArgsObjectSchema } from './UserCountOutputTypeCountAuthCodesArgs.schema';
import { UserCountOutputTypeCountSessionArgsObjectSchema as UserCountOutputTypeCountSessionArgsObjectSchema } from './UserCountOutputTypeCountSessionArgs.schema'

const makeSchema = () => z.object({
  AuthCodes: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAuthCodesArgsObjectSchema)]).optional(),
  Session: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
