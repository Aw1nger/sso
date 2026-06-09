import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    firstname: z.string().optional().nullable(),
    lastname: z.string().optional().nullable(),
    avatar: z.string().optional().nullable(),
    aproved: z.boolean(),
    AuthCodes: z.array(z.unknown()),
    Session: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
