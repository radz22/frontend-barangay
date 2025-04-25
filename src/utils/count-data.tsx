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
  populationtotal: number;
  populationGet2025: number;
  populationGet2026: number;
  populationGet2027: number;
  populationGet2028: number;
  populationGet2029: number;
  populationGet2030: number;
  populationThisYear: number;
  populationunder18: number;
  populationbelow18: number;
  medianAge: number;
} & EducationCounts;

const Count = (): CountResult => {
  const { data: cencusData } = useCencusData();
  const { data: residentData } = useResidentData();
  const currentYear = new Date().getFullYear();

  return useMemo(() => {
    const result: CountResult = {
      totalOfMale: 0,
      totalOfFemale: 0,
      elementary: { grad: 0, underGrad: 0 },
      highSchool: { grad: 0, underGrad: 0 },
      seniorHighSchool: { grad: 0, underGrad: 0 },
      college: { grad: 0, underGrad: 0 },
      populationtotal: 0,
      populationGet2025: 0,
      populationGet2026: 0,
      populationGet2027: 0,
      populationGet2028: 0,
      populationGet2029: 0,
      populationGet2030: 0,
      populationThisYear: 0,
      populationunder18: 0,
      populationbelow18: 0,
      medianAge: 0,
    };

    if (!cencusData || !residentData) {
      return result;
    }

    const residentGenderCounts = residentData.data.reduce(
      (acc: GenderCounts, item: residentType) => {
        if (item.gender === "male") acc.male++;
        if (item.gender === "female") acc.female++;
        return acc;
      },
      { male: 0, female: 0 }
    );

    const allHouseholdMembers = cencusData.data.flatMap(
      (item: cencusType) => item.householdMembers || []
    );
    const populationGet2025 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2025;
      }
    ).length;
    const populationGet2026 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2026;
      }
    ).length;
    const populationGet2027 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2027;
      }
    ).length;
    const populationGet2028 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2028;
      }
    ).length;
    const populationGet2029 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2029;
      }
    ).length;
    const populationGet2030 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === 2030;
      }
    ).length;

    const populationThisYear = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.createdAt) return false;

        const createdDate = new Date(resident.createdAt);
        return createdDate.getFullYear() === currentYear;
      }
    ).length;
    const populationunder18 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.age) return false;
        return resident.age >= 18;
      }
    ).length;
    const populationbelow18 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.age) return false;
        return resident.age < 18;
      }
    ).length;
    const ages: number[] = residentData.data
      .filter((resident: residentType) => typeof resident.age === "number")
      .map((resident: residentType) => resident.age as number)
      .sort((a: number, b: number) => a - b);

    const medianAge: number = (() => {
      if (ages.length === 0) return 0;
      const mid: number = Math.floor(ages.length / 2);
      return ages.length % 2 === 0
        ? (ages[mid - 1] + ages[mid]) / 2
        : ages[mid];
    })();
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

    return {
      medianAge,
      populationbelow18,
      populationunder18,
      populationThisYear,
      populationGet2025,
      populationGet2026,
      populationGet2027,
      populationGet2028,
      populationGet2029,
      populationGet2030,
      populationtotal: residentData.data.length,
      totalOfMale: residentGenderCounts.male,
      totalOfFemale: residentGenderCounts.female,
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
