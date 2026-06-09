import * as z from 'zod';
// prettier-ignore
export const SessionResultSchema = z.object({
    id: z.number().int(),
    token: z.string(),
    userId: z.number().int(),
    clientId: z.number().int(),
    revoked: z.boolean(),
    user: z.unknown(),
    client: z.unknown()
}).strict();

export type SessionResultType = z.infer<typeof SessionResultSchema>;
