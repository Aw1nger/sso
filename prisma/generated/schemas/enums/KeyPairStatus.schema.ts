import * as z from 'zod';

export const KeyPairStatusSchema = z.enum(['expired', 'writeoff', 'active'])

export type KeyPairStatus = z.infer<typeof KeyPairStatusSchema>;