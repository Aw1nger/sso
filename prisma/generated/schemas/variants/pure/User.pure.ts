import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    firstname: z.string().nullable(),
    lastname: z.string().nullable(),
    avatar: z.string().nullable(),
    aproved: z.boolean(),
    AuthCodes: z.array(z.unknown()),
    Session: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
