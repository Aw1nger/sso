import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'username', 'firstname', 'lastname', 'avatar', 'accountStatus', 'role'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;