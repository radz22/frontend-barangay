import axios from "axios";
import { residentType } from "../type/user/resident-profilling-zod";
import { residentVerify } from "../type/resident-verify-type";
import {
  residentUpdate,
  ResidentNew,
} from "../type/user/resident-profilling-zod";
export const createResident = async (data: residentType) => {
  try {
    const response = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/resident",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllResidentData = async () => {
  try {
    const response = await axios.get(
      "https://grumpy-trains-pump.loca.lt/api/resident"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getUserResidentDataById = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://grumpy-trains-pump.loca.lt/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteById = async (id: string | null) => {
  try {
    const response = await axios.delete(
      `https://grumpy-trains-pump.loca.lt/api/resident/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const registerFace = async ({
  id,
  descriptor,
}: {
  id: string;
  descriptor: number[];
}) => {
  try {
    const response = await axios.put(
      `https://grumpy-trains-pump.loca.lt/api/resident/${id}`,
      { descriptor }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateResident = async (data: ResidentNew) => {
  try {
    const response = await axios.put(
      `https://grumpy-trains-pump.loca.lt/api/resident/update/resident/${data.id}`,
      {
        firstName: data.firstName,
        lastName: data.lastName,
        middlename: data.middlename,
        dateofbirth: data.dateofbirth,
        age: data.age,
        gender: data.gender,
        civilstatus: data.civilstatus,
        mobilenumber: Number(data.mobilenumber),
        streetname: data.streetname,
        province: data.province,
        cloudinaryid: data.cloudinaryid,

        citizenship: data.citizenship,
        city: data.city,
        currentschoolenrollment: data.currentschoolenrollment,
        educationalattainment: data.educationalattainment,
        emailadress: data.emailadress,
        emergencycontactname: data.emergencycontactname,
        emergencycontactnumber: data.emergencycontactnumber,
        employmentstatus: data.employmentstatus,
        placeofbirth: data.placeofbirth,
        relationshiptoemergencycontact: data.relationshiptoemergencycontact,
        schooltype: data.schooltype,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateResidentValidate = async (data: residentUpdate) => {
  try {
    const response = await axios.post(
      `https://grumpy-trains-pump.loca.lt/api/residentupdate`,
      {
        updateid: data.updateid,
        firstName: data.firstName,
        lastName: data.lastName,
        middlename: data.middlename,
        dateofbirth: data.dateofbirth,
        age: data.age,
        gender: data.gender,
        civilstatus: data.civilstatus,
        mobilenumber: Number(data.mobilenumber),
        streetname: data.streetname,
        province: data.province,
        image: data.cloudinaryphoto,
        citizenship: data.citizenship,
        city: data.city,
        currentschoolenrollment: data.currentschoolenrollment,
        educationalattainment: data.educationalattainment,
        emailadress: data.emailadress,
        emergencycontactname: data.emergencycontactname,
        emergencycontactnumber: data.emergencycontactnumber,
        employmentstatus: data.employmentstatus,
        placeofbirth: data.placeofbirth,
        relationshiptoemergencycontact: data.relationshiptoemergencycontact,
        schooltype: data.schooltype,
        documents: data.documents,
        reason: data.reason,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getAllUpdateApproval = async () => {
  try {
    const response = await axios.get(
      "https://grumpy-trains-pump.loca.lt/api/residentupdate"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const decline = async ({
  reason,
  reasonid,
  cloudinaryid,
}: {
  reason: string;
  reasonid: string;
  cloudinaryid: string;
}) => {
  try {
    const response = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/residentupdate/decline",
      {
        reason,
        reasonid,
        cloudinaryid,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReasonbyResident = async (id: string | undefined) => {
  try {
    const response = await axios.get(
      `https://grumpy-trains-pump.loca.lt/api/residentupdate/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyResident = async (data: residentVerify) => {
  try {
    const response = await axios.post(
      "https://grumpy-trains-pump.loca.lt/api/image/verify",
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const archived = async (id: string | null) => {
  try {
    const response = await axios.put(
      `https://grumpy-trains-pump.loca.lt/api/resident/archived/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const restore = async (id: string | null) => {
  try {
    const response = await axios.put(
      `https://grumpy-trains-pump.loca.lt/api/resident/restore/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
