import * as z from 'zod';
import { KeyPairStatusSchema } from '../../enums/KeyPairStatus.schema';
// prettier-ignore
export const KeyPairInputSchema = z.object({
    id: z.number().int(),
    publicKey: z.string(),
    privateKey: z.string(),
    createdAt: z.date(),
    alghoritm: z.string(),
    status: KeyPairStatusSchema
}).strict();

export type KeyPairInputType = z.infer<typeof KeyPairInputSchema>;
