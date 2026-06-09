import * as z from 'zod';
// prettier-ignore
export const ClientInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    secret: z.string(),
    redirectUri: z.array(z.string()),
    AuthCode: z.array(z.unknown()),
    Session: z.array(z.unknown())
}).strict();

export type ClientInputType = z.infer<typeof ClientInputSchema>;
