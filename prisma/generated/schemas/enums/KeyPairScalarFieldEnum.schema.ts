import * as z from 'zod';

export const KeyPairScalarFieldEnumSchema = z.enum(['id', 'publicKey', 'privateKey', 'createdAt', 'alghoritm', 'status'])

export type KeyPairScalarFieldEnum = z.infer<typeof KeyPairScalarFieldEnumSchema>;