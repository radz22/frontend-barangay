import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { reasonDataType } from "../type/reason-type";
import {
  residentUpdate,
  ResidentNew,
} from "../type/user/resident-profilling-zod";

import {
  handleSuccessAlert,
  handleErrorAlert,
} from "../components/sweet-alert";
import {
  createResident,
  getAllResidentData,
  getUserResidentDataById,
  deleteById,
  registerFace,
  updateResident,
  updateResidentValidate,
  getAllUpdateApproval,
  decline,
  getReasonbyResident,
} from "../services/resident-service";
import { residentType } from "../type/user/resident-profilling-zod";
const ResidentHook = () => {
  const queryClient = useQueryClient();
  const [_, setResidentDataUser] = useState<residentType>();
  const [reasonData, setReasonData] = useState<reasonDataType>();
  //mutation
  const { data: residentData, isLoading } = useQuery({
    queryKey: ["resident"],
    queryFn: getAllResidentData,
  });
  const { data: getAll } = useQuery({
    queryKey: ["updateresident"],
    queryFn: getAllUpdateApproval,
  });
  const createResidentMutation = useMutation({
    mutationFn: createResident,
    onSuccess: (data) => {
      handleSuccessAlert("Submitted");
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["resident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const createUpdateResident = useMutation({
    mutationFn: updateResidentValidate,
    onSuccess: () => {
      handleSuccessAlert("Submitted");
      queryClient.invalidateQueries({ queryKey: ["updateresident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const getResidenttDataByIdMutation = useMutation({
    mutationFn: getUserResidentDataById,
    onSuccess: (data) => {
      setResidentDataUser(data.data);
      queryClient.invalidateQueries({ queryKey: ["resident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });

  const deleteResidentDataByIdMutation = useMutation({
    mutationFn: deleteById,
    onSuccess: () => {
      handleSuccessAlert("Deleted Succesfuly ");
      queryClient.invalidateQueries({ queryKey: ["resident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const faceRegisterMutation = useMutation({
    mutationFn: registerFace,
    onSuccess: (data) => {
      handleSuccessAlert(data.message);
      queryClient.invalidateQueries({ queryKey: ["resident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const updateResidentMutation = useMutation({
    mutationFn: updateResident,
    onSuccess: () => {
      handleSuccessAlert("Success Approve ");
      queryClient.invalidateQueries({ queryKey: ["resident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const getReasonMutation = useMutation({
    mutationFn: getReasonbyResident,
    onSuccess: (data) => {
      setReasonData(data.data);
      queryClient.invalidateQueries({ queryKey: ["reason"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const declineMutation = useMutation({
    mutationFn: decline,
    onSuccess: () => {
      handleSuccessAlert("Submitted");
      queryClient.invalidateQueries({ queryKey: ["updateresident"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  //function
  const handleCreateResident = (data: residentType) => {
    createResidentMutation.mutate(data);
  };

  const handleGetUserResidentDataById = (id: string | undefined) => {
    getResidenttDataByIdMutation.mutate(id);
  };
  const handleDelete = (id: string | null) => {
    deleteResidentDataByIdMutation.mutate(id);
  };
  const handleRegisterFace = (id: string | undefined, descriptor: number[]) => {
    if (id) {
      faceRegisterMutation.mutateAsync({ id, descriptor });
    }
  };
  const handleUpdateResident = (data: ResidentNew) => {
    updateResidentMutation.mutateAsync(data);
  };

  const handleCreateNewResidentUpdate = (data: residentUpdate) => {
    createUpdateResident.mutate(data);
  };

  const handleGetReason = (id: string | undefined) => {
    getReasonMutation.mutate(id);
  };

  const handleDecline = (reason: string, reasonid: string) => {
    declineMutation.mutate({ reason, reasonid });
  };
  return {
    handleCreateResident,
    createResidentMutation,
    residentData,
    handleGetUserResidentDataById,
    handleDelete,
    deleteResidentDataByIdMutation,
    isLoading,
    faceRegisterMutation,
    handleRegisterFace,
    handleUpdateResident,
    updateResidentMutation,
    handleCreateNewResidentUpdate,
    createUpdateResident,
    getAll,
    handleGetReason,
    reasonData,
    handleDecline,
    declineMutation,
  };
};

export default ResidentHook;
