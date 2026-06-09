import * as z from 'zod';
// prettier-ignore
export const AuthCodeInputSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    userId: z.number().int(),
    createdAt: z.date(),
    clientId: z.number().int(),
    user: z.unknown(),
    client: z.unknown()
}).strict();

export type AuthCodeInputType = z.infer<typeof AuthCodeInputSchema>;
