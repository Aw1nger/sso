import * as z from 'zod';

export const UserStatusSchema = z.enum(['pending', 'active', 'rejected', 'blocked'])

export type UserStatus = z.infer<typeof UserStatusSchema>;