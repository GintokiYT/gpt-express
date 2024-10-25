import z from 'zod';

export const domainScheme = z.object({
  domains: z.string().min(1).max(200)
});