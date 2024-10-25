import z from 'zod';

export const chatScheme = z.object({
  domainId: z.number(),
  questionHistoryId: z.number(),
  userId: z.string().min(1),
  user: z.object({}),
  content: z.string().min(1),
  type: z.enum(['QUESTION', 'ANSWER']),
  success: z.boolean()
});