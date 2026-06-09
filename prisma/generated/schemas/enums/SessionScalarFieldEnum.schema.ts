import * as z from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id', 'token', 'userId', 'clientId', 'revoked'])

export type SessionScalarFieldEnum = z.infer<typeof SessionScalarFieldEnumSchema>;