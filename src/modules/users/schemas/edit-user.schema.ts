import z from "zod";

export const editUserSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
})

export type EditUserData = z.infer<typeof editUserSchema>