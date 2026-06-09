import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { KeyPairSelectObjectSchema as KeyPairSelectObjectSchema } from './objects/KeyPairSelect.schema';
import { KeyPairWhereUniqueInputObjectSchema as KeyPairWhereUniqueInputObjectSchema } from './objects/KeyPairWhereUniqueInput.schema';

export const KeyPairFindUniqueOrThrowSchema: z.ZodType<Prisma.KeyPairFindUniqueOrThrowArgs> = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.KeyPairFindUniqueOrThrowArgs>;

export const KeyPairFindUniqueOrThrowZodSchema = z.object({ select: KeyPairSelectObjectSchema.optional(),  where: KeyPairWhereUniqueInputObjectSchema }).strict();