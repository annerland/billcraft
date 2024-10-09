
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";

export const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().nullable().optional(),
    address: z.string().min(1).max(255),
    address2: z.string().max(255).nullable().optional(),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    state: z.string().nullable().optional(),
    country: z.string().min(1),
  })
);