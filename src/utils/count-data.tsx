import { useMemo } from "react";
import { useCencusData } from "../hooks/staff/use-cencus-data";
import { useResidentData } from "../hooks/use-resident-data";
import { residentType } from "../type/user/resident-profilling-zod";

interface EducationCounts {
  noEducation: number;
  preschool: number;
  kindergarten: number;
  k12: number;
  oldCurriculum: number;
  higherEducation: number;
  collegeGraduate: number;
  postGraduate: number;
}

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
  populationunder60: number;

  medianAge: number;
  employed: number;
  unemployed: number;
  selfEmployed: number;
  student: number;
  retired: number;
} & EducationCounts;

const Count = (): CountResult => {
  const { data: cencusData } = useCencusData();
  const { data: residentData } = useResidentData();
  const currentYear = new Date().getFullYear();

  return useMemo(() => {
    const result: CountResult = {
      //education
      noEducation: 0,
      preschool: 0,
      kindergarten: 0,
      k12: 0,
      oldCurriculum: 0,
      higherEducation: 0,
      collegeGraduate: 0,
      postGraduate: 0,

      //employment
      employed: 0,
      unemployed: 0,
      selfEmployed: 0,
      student: 0,
      retired: 0,

      //
      totalOfMale: 0,
      totalOfFemale: 0,
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
      populationunder60: 0,
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
        return resident.age >= 18 && resident.age < 60;
      }
    ).length;
    const populationunder60 = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.age) return false;
        return resident.age >= 60;
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

    const noEducation = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;
      return resident.educationalattainment == "NO GRADE COMPLETED";
    }).length;

    const preschool = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;
      return resident.educationalattainment == "PRESCHOOL";
    }).length;

    const kindergarten = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;
      return resident.educationalattainment == "KINDERGARTEN";
    }).length;

    const k12 = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;

      return [
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
      ].includes(resident.educationalattainment);
    }).length;

    const oldCurriculum = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;

      return [
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
      ].includes(resident.educationalattainment);
    }).length;

    const higherEducation = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.educationalattainment) return false;

        return [
          "1ST YEAR COLLEGE",
          "2ND YEAR COLLEGE",
          "3RD YEAR COLLEGE",
          "4TH YEAR COLLEGE",
          "COLLEGE GRADUATE",
          "POSTGRADUATE STUDIES",
        ].includes(resident.educationalattainment);
      }
    ).length;
    const collegeGraduate = residentData.data.filter(
      (resident: residentType) => {
        if (!resident.educationalattainment) return false;

        return resident.educationalattainment === "COLLEGE GRADUATE";
      }
    ).length;

    const postGraduate = residentData.data.filter((resident: residentType) => {
      if (!resident.educationalattainment) return false;

      return resident.educationalattainment === "POSTGRADUATE STUDIES";
    }).length;

    //employment status

    const employed = residentData.data.filter((resident: residentType) => {
      if (!resident.employmentstatus) return false;
      return resident.employmentstatus === "employed";
    }).length;

    const selfEmployed = residentData.data.filter((resident: residentType) => {
      if (!resident.employmentstatus) return false;
      return resident.employmentstatus === "selfemployed";
    }).length;

    const unemployed = residentData.data.filter((resident: residentType) => {
      if (!resident.employmentstatus) return false;
      return resident.employmentstatus === "unemployed";
    }).length;

    const student = residentData.data.filter((resident: residentType) => {
      if (!resident.employmentstatus) return false;
      return resident.employmentstatus === "student";
    }).length;

    const retired = residentData.data.filter((resident: residentType) => {
      if (!resident.employmentstatus) return false;
      return resident.employmentstatus === "retired";
    }).length;

    return {
      //employment status
      employed,
      unemployed,
      selfEmployed,
      student,
      retired,

      //educational attainment
      noEducation,
      preschool,
      kindergarten,
      k12,
      oldCurriculum,
      higherEducation,
      collegeGraduate,
      postGraduate,

      medianAge,
      populationbelow18,
      populationunder18,
      populationunder60,
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
    };
  }, [cencusData, residentData]);
};

export default Count;
