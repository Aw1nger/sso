import * as z from 'zod';
// prettier-ignore
export const FirstRegisterModelSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    code: z.string(),
    expiresAt: z.date()
}).strict();

export type FirstRegisterPureType = z.infer<typeof FirstRegisterModelSchema>;
