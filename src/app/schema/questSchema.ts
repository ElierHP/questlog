import * as z from "zod";

export const schema = z.object({
  name: z.string().min(3).max(30),
  description: z.string().min(10).max(200),
  checklist: z.string().max(20),
  checklist2: z.string().max(20),
  checklist3: z.string().max(20),
  checklist4: z.string().max(20),
  checklist5: z.string().max(20),
});
