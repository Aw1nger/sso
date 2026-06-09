import * as z from 'zod';

export const AuthCodeScalarFieldEnumSchema = z.enum(['id', 'code', 'userId', 'createdAt', 'clientId'])

export type AuthCodeScalarFieldEnum = z.infer<typeof AuthCodeScalarFieldEnumSchema>;