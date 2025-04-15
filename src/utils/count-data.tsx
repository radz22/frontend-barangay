import { useMemo } from "react";
import { useCencusData } from "../hooks/staff/use-cencus-data";
import { useResidentData } from "../hooks/use-resident-data";
import { cencusType } from "../type/user/cencus-zod";
import { residentType } from "../type/user/resident-profilling-zod";

type EducationCounts = {
  elementary: { grad: number; underGrad: number };
  highSchool: { grad: number; underGrad: number };
  seniorHighSchool: { grad: number; underGrad: number };
  college: { grad: number; underGrad: number };
};

type GenderCounts = {
  male: number;
  female: number;
};

type CountResult = {
  totalOfMale: number;
  totalOfFemale: number;
} & EducationCounts;

const Count = (): CountResult => {
  const { data: cencusData } = useCencusData();
  const { data: residentData } = useResidentData();

  return useMemo(() => {
    // Initialize default values
    const result: CountResult = {
      totalOfMale: 0,
      totalOfFemale: 0,
      elementary: { grad: 0, underGrad: 0 },
      highSchool: { grad: 0, underGrad: 0 },
      seniorHighSchool: { grad: 0, underGrad: 0 },
      college: { grad: 0, underGrad: 0 },
    };

    if (!cencusData || !residentData) {
      return result;
    }

    // Process resident data
    const residentGenderCounts = residentData.data.reduce(
      (acc: GenderCounts, item: residentType) => {
        if (item.gender === "male") acc.male++;
        if (item.gender === "female") acc.female++;
        return acc;
      },
      { male: 0, female: 0 }
    );

    // Process census data
    const allHouseholdMembers = cencusData.data.flatMap(
      (item: cencusType) => item.householdMembers || []
    );

    const censusGenderCounts = cencusData.data.reduce(
      (acc: GenderCounts, item: cencusType) => {
        if (item.gender === "male") acc.male++;
        if (item.gender === "female") acc.female++;
        return acc;
      },
      { male: 0, female: 0 }
    );

    // Count education for both heads and members
    const countEducation = (items: cencusType[]): EducationCounts => {
      return items.reduce(
        (acc: EducationCounts, item: cencusType) => {
          const attainment = item.educationalattainment;

          // Elementary
          if (attainment === "elementary graduate") acc.elementary.grad++;
          if (attainment === "elementary undergraduate")
            acc.elementary.underGrad++;

          // High School
          if (attainment === "high school graduate") acc.highSchool.grad++;
          if (attainment === "high school undergraduate")
            acc.highSchool.underGrad++;

          // Senior High School
          if (
            attainment === "senior high school graduate - TVL" ||
            attainment === "senior high school graduate - HUMSS" ||
            attainment === "senior high school graduate - STEM"
          )
            acc.seniorHighSchool.grad++;
          if (attainment === "senior high school undergraduate")
            acc.seniorHighSchool.underGrad++;

          // College
          if (attainment === "college graduate") acc.college.grad++;
          if (attainment === "college undergraduate") acc.college.underGrad++;

          return acc;
        },
        {
          elementary: { grad: 0, underGrad: 0 },
          highSchool: { grad: 0, underGrad: 0 },
          seniorHighSchool: { grad: 0, underGrad: 0 },
          college: { grad: 0, underGrad: 0 },
        }
      );
    };

    const headsEducation = countEducation(cencusData.data);
    const membersEducation = countEducation(allHouseholdMembers);

    // Combine results
    return {
      totalOfMale: residentGenderCounts.male + censusGenderCounts.male,
      totalOfFemale: residentGenderCounts.female + censusGenderCounts.female,
      elementary: {
        grad: headsEducation.elementary.grad + membersEducation.elementary.grad,
        underGrad:
          headsEducation.elementary.underGrad +
          membersEducation.elementary.underGrad,
      },
      highSchool: {
        grad: headsEducation.highSchool.grad + membersEducation.highSchool.grad,
        underGrad:
          headsEducation.highSchool.underGrad +
          membersEducation.highSchool.underGrad,
      },
      seniorHighSchool: {
        grad:
          headsEducation.seniorHighSchool.grad +
          membersEducation.seniorHighSchool.grad,
        underGrad:
          headsEducation.seniorHighSchool.underGrad +
          membersEducation.seniorHighSchool.underGrad,
      },
      college: {
        grad: headsEducation.college.grad + membersEducation.college.grad,
        underGrad:
          headsEducation.college.underGrad + membersEducation.college.underGrad,
      },
    };
  }, [cencusData, residentData]);
};

export default Count;
