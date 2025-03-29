import { z } from "zod";

export const censusSchema = z.object({
  householdSize: z.number().min(1, "Household size is required"),
  totalIncome: z.number().min(0, "Total income must be a positive number"),
  members: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      age: z.number().min(0, "Age must be a positive number"),
      occupation: z.string().min(1, "Occupation is required"),
    })
  ),
});

export type CensusFormData = z.infer<typeof censusSchema>;
