import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { ClientCreateNestedOneWithoutAuthCodeInputObjectSchema as ClientCreateNestedOneWithoutAuthCodeInputObjectSchema } from './ClientCreateNestedOneWithoutAuthCodeInput.schema'

const makeSchema = () => z.object({
  code: z.string(),
  createdAt: z.coerce.date().optional(),
  client: z.lazy(() => ClientCreateNestedOneWithoutAuthCodeInputObjectSchema)
}).strict();
export const AuthCodeCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.AuthCodeCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuthCodeCreateWithoutUserInput>;
export const AuthCodeCreateWithoutUserInputObjectZodSchema = makeSchema();
