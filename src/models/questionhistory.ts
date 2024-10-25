import z from 'zod';

export const questionHistoryScheme = z.object({
  domainId: z.number(),
  name: z.string().min(1).max(200)
});