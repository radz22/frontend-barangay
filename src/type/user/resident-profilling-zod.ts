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

export interface residentUpdate {
  updateid: string;
  firstName: string;
  lastName: string;
  middlename: string | undefined;
  dateofbirth: string;
  gender: string;
  civilstatus: string | undefined;
  nationality: string | undefined;
  mobilenumber: number | undefined;
  address: string | undefined;
  streetname: string | undefined;
  province: string | undefined;
  cloudinaryphoto: string | undefined;
}
export type residentApprovalData = {
  _id: string;
  updateid: string;
  firstName: string;
  middlename: string;
  lastName: string;
  dateofbirth: string; // ISO date string: "YYYY-MM-DD"
  gender: "male" | "female" | "other"; // You can adjust if needed
  civilstatus: "single" | "married" | "divorced" | "widowed"; // Add other statuses as needed
  mobilenumber: string | null;
  nationality: string;
  address: string;
  province: string;
  cloudinaryphoto: string;
  cloudinaryid: string;
  streetname: string;
  createdAt: string; // ISO timestamp
  updatedAt: string; // ISO timestamp
  __v: number;
};

export type ResidentNew = {
  id: string;
  firstName: string;
  middlename: string;
  lastName: string;
  dateofbirth: string;
  gender: string;
  civilstatus: string;
  mobilenumber: string | null;
  nationality: string;
  address: string;
  province: string;
  streetname: string;
  cloudinaryid: string;
};
