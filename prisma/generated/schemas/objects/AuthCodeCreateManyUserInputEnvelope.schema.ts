import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AuthCodeCreateManyUserInputObjectSchema as AuthCodeCreateManyUserInputObjectSchema } from './AuthCodeCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AuthCodeCreateManyUserInputObjectSchema), z.lazy(() => AuthCodeCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AuthCodeCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AuthCodeCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateManyUserInputEnvelope>;
export const AuthCodeCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
