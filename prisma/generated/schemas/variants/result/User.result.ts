import * as z from 'zod';
import { UserStatusSchema } from '../../enums/UserStatus.schema';
import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    avatar: z.string().nullable(),
    accountStatus: UserStatusSchema,
    role: RoleSchema,
    AuthCodes: z.array(z.unknown()),
    Session: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
