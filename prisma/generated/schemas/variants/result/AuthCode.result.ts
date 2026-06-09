import * as z from 'zod';
// prettier-ignore
export const AuthCodeResultSchema = z.object({
    id: z.number().int(),
    code: z.string(),
    userId: z.number().int(),
    createdAt: z.date(),
    clientId: z.number().int(),
    user: z.unknown(),
    client: z.unknown()
}).strict();

export type AuthCodeResultType = z.infer<typeof AuthCodeResultSchema>;
