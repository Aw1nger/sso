import * as z from 'zod';
export const KeyPairFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  publicKey: z.string(),
  privateKey: z.string(),
  createdAt: z.date(),
  alghoritm: z.string(),
  status: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});