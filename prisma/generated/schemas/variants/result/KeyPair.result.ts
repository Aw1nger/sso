import * as z from 'zod';
import { KeyPairStatusSchema } from '../../enums/KeyPairStatus.schema';
// prettier-ignore
export const KeyPairResultSchema = z.object({
    id: z.number().int(),
    publicKey: z.string(),
    privateKey: z.string(),
    createdAt: z.date(),
    alghoritm: z.string(),
    status: KeyPairStatusSchema
}).strict();

export type KeyPairResultType = z.infer<typeof KeyPairResultSchema>;
