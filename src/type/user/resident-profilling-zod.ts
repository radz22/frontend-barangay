import { z } from "zod";

export const residentSchema = z.object({
  _id: z.string().optional(),
  cencusid: z.string().min(1, "Census ID is required").optional(),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  middlename: z.string().optional(),
  dateofbirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      return !isNaN(Date.parse(date));
    }, "Invalid date format"),
  gender: z.enum(["female", "male"]),

  civilstatus: z.enum(["single", "married", "widowed", "seperated"], {
    required_error: "Civil status is required",
  }),

  nationality: z.string().min(1, "Nationality is required"),
  mobilenumber: z.number().min(1, "Mobile number is required"),
  address: z.string().min(1, "Address is required"),
  streetname: z.string().min(1, "Street name is required"),
  province: z.string().min(1, "Province is required"),
  descriptor: z.array(z.number()).optional(),
  staffaccountcreate: z.string().optional(),
});

export type residentType = z.infer<typeof residentSchema>;
