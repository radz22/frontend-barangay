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
  age: z.number().optional(),
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
  createdAt: z.string().optional(),

  //new
  citizenship: z.string().min(1, "Citizen is required"),
  city: z.string().min(1, "City is required"),
  currentschoolenrollment: z
    .string()
    .min(1, "Current School Enrollment is required"),
  educationalattainment: z.enum(
    [
      "NO GRADE COMPLETED",
      "PRESCHOOL",
      "KINDERGARTEN",
      "GRADE 1 (K TO 12)",
      "GRADE 2 (K TO 12)",
      "GRADE 3 (K TO 12)",
      "GRADE 4 (K TO 12)",
      "GRADE 5 (K TO 12)",
      "GRADE 6 (K TO 12)",
      "GRADE 7 (K TO 12)",
      "GRADE 8 (K TO 12)",
      "GRADE 9 (K TO 12)",
      "GRADE 10 (K TO 12)",
      "GRADE 11 (K TO 12)",
      "GRADE 12 (K TO 12)",
      "GRADE 1 (OLD CURRICULUM)",
      "GRADE 2 (OLD CURRICULUM)",
      "GRADE 3 (OLD CURRICULUM)",
      "GRADE 4 (OLD CURRICULUM)",
      "GRADE 5 (OLD CURRICULUM)",
      "GRADE 6 (OLD CURRICULUM)",
      "GRADE 6 GRADUATE (OLD CURRICULUM)",
      "GRADE 7 GRADUATE (OLD CURRICULUM)",
      "1ST YEAR HIGH SCHOOL (OLD CURRICULUM)",
      "2ND YEAR HIGH SCHOOL (OLD CURRICULUM)",
      "3RD YEAR HIGH SCHOOL (OLD CURRICULUM)",
      "4TH YEAR HIGH SCHOOL (OLD CURRICULUM)",
      "HIGH SCHOOL GRADUATE (OLD CURRICULUM)",
      "1ST YEAR COLLEGE",
      "2ND YEAR COLLEGE",
      "3RD YEAR COLLEGE",
      "4TH YEAR COLLEGE",
      "COLLEGE GRADUATE",
      "POSTGRADUATE STUDIES",
    ],
    {
      required_error: "Highest Grade/Year Completed is required",
    }
  ),
  emailadress: z.string().email({ message: "Invalid email address" }),
  emergencycontactname: z.string().min(1, "Emergency Contact Name is required"),
  emergencycontactnumber: z
    .number()
    .min(1, "Emergency Contact Number is required"),
  employmentstatus: z.enum(
    ["employed", "selfemployed", "unemployed", "student", "retired"],
    {
      required_error: "Employment Status is Required",
    }
  ),
  placeofbirth: z.string().min(1, "Place of Birth is required"),
  relationshiptoemergencycontact: z
    .string()
    .min(1, "Relationship to Emergency Contact is required"),
  schooltype: z.string().min(1, "School Type is required"),
});

export type residentType = z.infer<typeof residentSchema>;

export interface residentUpdate {
  updateid: string;
  firstName: string;
  lastName: string;
  middlename: string | undefined;
  dateofbirth: string;
  gender: string;
  age: number;
  civilstatus: string | undefined;
  mobilenumber: number | undefined;
  streetname: string | undefined;
  province: string | undefined;

  citizenship: string;
  city: string;
  currentschoolenrollment: string;
  educationalattainment: string;
  emailadress: string;
  emergencycontactname: string;
  emergencycontactnumber: number;
  employmentstatus: string;
  placeofbirth: string;
  relationshiptoemergencycontact: string;
  schooltype: string;

  cloudinaryphoto: string | undefined;
}
export type residentApprovalData = {
  _id: string;
  updateid: string;
  firstName: string;
  middlename: string;
  lastName: string;
  dateofbirth: string;
  age: number;
  gender: "male" | "female" | "other";
  civilstatus: "single" | "married" | "divorced" | "widowed";
  mobilenumber: string | null;
  province: string;
  cloudinaryphoto: string;
  cloudinaryid: string;
  streetname: string;

  citizenship: string;
  city: string;
  currentschoolenrollment: string;
  educationalattainment: string;
  emailadress: string;
  emergencycontactname: string;
  emergencycontactnumber: number;
  employmentstatus: string;
  placeofbirth: string;
  relationshiptoemergencycontact: string;
  schooltype: string;

  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ResidentNew = {
  id: string;
  firstName: string;
  middlename: string;
  lastName: string;
  dateofbirth: string;
  gender: string;
  age: number;
  civilstatus: string;
  mobilenumber: string | null;
  province: string;
  streetname: string;
  cloudinaryid: string;

  citizenship: string;
  city: string;
  currentschoolenrollment: string;
  educationalattainment: string;
  emailadress: string;
  emergencycontactname: string;
  emergencycontactnumber: number;
  employmentstatus: string;
  placeofbirth: string;
  relationshiptoemergencycontact: string;
  schooltype: string;
};
