import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateManyClientInputObjectSchema as AuthCodeCreateManyClientInputObjectSchema } from './AuthCodeCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuthCodeCreateManyClientInputObjectSchema), z.lazy(() => AuthCodeCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuthCodeCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.AuthCodeCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateManyClientInputEnvelope>;
export const AuthCodeCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
