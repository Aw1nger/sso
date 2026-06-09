import * as z from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['id', 'name', 'secret', 'redirectUri'])

export type ClientScalarFieldEnum = z.infer<typeof ClientScalarFieldEnumSchema>;