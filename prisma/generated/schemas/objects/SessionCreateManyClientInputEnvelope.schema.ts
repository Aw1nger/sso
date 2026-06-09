import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCreateManyClientInputObjectSchema as SessionCreateManyClientInputObjectSchema } from './SessionCreateManyClientInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SessionCreateManyClientInputObjectSchema), z.lazy(() => SessionCreateManyClientInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SessionCreateManyClientInputEnvelopeObjectSchema: z.ZodType<Prisma.SessionCreateManyClientInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SessionCreateManyClientInputEnvelope>;
export const SessionCreateManyClientInputEnvelopeObjectZodSchema = makeSchema();
