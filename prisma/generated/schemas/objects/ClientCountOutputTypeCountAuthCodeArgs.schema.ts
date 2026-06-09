import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeWhereInputObjectSchema as AuthCodeWhereInputObjectSchema } from './AuthCodeWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuthCodeWhereInputObjectSchema).optional()
}).strict();
export const ClientCountOutputTypeCountAuthCodeArgsObjectSchema = makeSchema();
export const ClientCountOutputTypeCountAuthCodeArgsObjectZodSchema = makeSchema();
