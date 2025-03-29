import CencusHook from "../hooks/staff/cencus-hook";
import ResidentHook from "../hooks/resident-hook";
import { cencusType } from "../type/user/cencus-zod";
import { residentType } from "../type/user/resident-profilling-zod";
const Count = () => {
  const { cencusData } = CencusHook();
  const { residentData } = ResidentHook();

  const getAllMaleResident = residentData?.data.filter(
    (item: residentType) => item.gender == "male"
  ).length;
  const getAllFemaleResident = residentData?.data.filter(
    (item: residentType) => item.gender == "female"
  ).length;
  const getAllMaleCencus = cencusData?.data.filter(
    (item: cencusType) => item.gender == "male"
  ).length;

  const getAllFemaleCencus = cencusData?.data.filter(
    (item: cencusType) => item.gender == "female"
  ).length;

  const totalOfMale = getAllMaleCencus + getAllMaleResident;
  const totalOfFemale = getAllFemaleCencus + getAllFemaleResident;

  console.log(totalOfMale);
  const getElementaryGradHouseHold = cencusData?.data.filter(
    (item: cencusType) => item.educationalattainment == "elementary graduate"
  ).length;
  const getElementaryUnderGradHouseHold = cencusData?.data.filter(
    (item: cencusType) =>
      item.educationalattainment == "elementary undergraduate"
  ).length;

  const getHighSchoolGradHouseHold = cencusData?.data.filter(
    (item: cencusType) => item.educationalattainment == "high school graduate"
  ).length;
  const getHighSchoolUnderGradHouseHold = cencusData?.data.filter(
    (item: cencusType) =>
      item.educationalattainment == "high school undergraduate"
  ).length;

  const getSeniorHighSchoolGradHouseHold = cencusData?.data.filter(
    (item: cencusType) =>
      item.educationalattainment == "senior high school graduate - TVL" ||
      item.educationalattainment == "senior high school graduate - HUMSS" ||
      item.educationalattainment == "senior high school graduate - STEM"
  ).length;
  const getSeniorHighSchoolUnderGradHouseHold = cencusData?.data.filter(
    (item: cencusType) =>
      item.educationalattainment == "senior high school undergraduate"
  ).length;
  const getCollegeGradHouseHold = cencusData?.data.filter(
    (item: cencusType) => item.educationalattainment == "college graduate"
  ).length;
  const getCollegeUnderGradHouseHold = cencusData?.data.filter(
    (item: cencusType) => item.educationalattainment == "college undergraduate"
  ).length;

  //housemembers
  const householdMembers = cencusData?.data[0]?.householdMembers || [];

  const getElementaryGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) => item.educationalattainment == "elementary graduate"
    ).length || 0;

  const getElementaryUnderGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) =>
        item.educationalattainment == "elementary undergraduate"
    ).length || 0;

  const getHighSchoolGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) => item.educationalattainment == "high school graduate"
    ).length || 0;

  const getHighSchoolUnderGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) =>
        item.educationalattainment == "high school undergraduate"
    ).length || 0;

  const getSeniorHighSchoolGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) =>
        item.educationalattainment == "senior high school graduate - TVL" ||
        item.educationalattainment == "senior high school graduate - HUMSS" ||
        item.educationalattainment == "senior high school graduate - STEM"
    ).length || 0;

  const getSeniorHighSchoolUnderGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) =>
        item.educationalattainment == "senior high school undergraduate"
    ).length || 0;

  const getCollegeGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) => item.educationalattainment == "college graduate"
    ).length || 0;

  const getCollegeUnderGradHouseHoldMembers =
    householdMembers.filter(
      (item: cencusType) =>
        item.educationalattainment == "college undergraduate"
    ).length || 0;

  //computation

  const elementaryGraduateTotal =
    getElementaryGradHouseHold + getElementaryGradHouseHoldMembers;
  const elementaryUnderGraduateTotal =
    getElementaryUnderGradHouseHold + getElementaryUnderGradHouseHoldMembers;
  const highSchoolGraduateTotal =
    getHighSchoolGradHouseHold + getHighSchoolGradHouseHoldMembers;
  const highSchoolUnderGraduateTotal =
    getHighSchoolUnderGradHouseHold + getHighSchoolUnderGradHouseHoldMembers;
  const seniorHighSchoolGraduateTotal =
    getSeniorHighSchoolGradHouseHold + getSeniorHighSchoolGradHouseHoldMembers;
  const seniorHighSchoolUnderGraduateTotal =
    getSeniorHighSchoolUnderGradHouseHold +
    getSeniorHighSchoolUnderGradHouseHoldMembers;
  const collegeGraduateTotal =
    getCollegeGradHouseHold + getCollegeGradHouseHoldMembers;
  const collegeUnderGraduateTotal =
    getCollegeUnderGradHouseHold + getCollegeUnderGradHouseHoldMembers;

  return {
    totalOfMale,
    totalOfFemale,
    elementaryGraduateTotal,
    elementaryUnderGraduateTotal,
    highSchoolGraduateTotal,
    highSchoolUnderGraduateTotal,
    seniorHighSchoolGraduateTotal,
    seniorHighSchoolUnderGraduateTotal,
    collegeGraduateTotal,
    collegeUnderGraduateTotal,
  };
};

export default Count;
