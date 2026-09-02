import * as z from 'zod';
import { UserStatusSchema } from '../../enums/UserStatus.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    firstname: z.string().optional().nullable(),
    lastname: z.string().optional().nullable(),
    avatar: z.string().optional().nullable(),
    accountStatus: UserStatusSchema,
    role: RoleSchema,
    AuthCodes: z.array(z.unknown()),
    Session: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
