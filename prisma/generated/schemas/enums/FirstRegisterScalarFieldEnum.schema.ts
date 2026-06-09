import * as z from 'zod';

export const FirstRegisterScalarFieldEnumSchema = z.enum(['id', 'email', 'username', 'code', 'expiresAt'])

export type FirstRegisterScalarFieldEnum = z.infer<typeof FirstRegisterScalarFieldEnumSchema>;