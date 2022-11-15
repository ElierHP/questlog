import * as z from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain at least 3 character(s)" })
    .max(30, { message: "Name must contain at most 30 character(s)" }),
  description: z
    .string()
    .min(20, { message: "Description must contain at least 20 character(s)" })
    .max(200, { message: "Description must contain at most 200 character(s)" }),
  checklist: z.string().max(50),
  checklist2: z.string().max(50),
  checklist3: z.string().max(50),
  checklist4: z.string().max(50),
  checklist5: z.string().max(50),
});
