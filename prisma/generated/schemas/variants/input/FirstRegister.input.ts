import * as z from 'zod';
// prettier-ignore
export const FirstRegisterInputSchema = z.object({
    id: z.number().int(),
    email: z.string(),
    username: z.string(),
    code: z.string(),
    expiresAt: z.date()
}).strict();

export type FirstRegisterInputType = z.infer<typeof FirstRegisterInputSchema>;
