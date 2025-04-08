import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
} from "../services/resident-service";
import { residentType } from "../type/user/resident-profilling-zod";
const ResidentHook = () => {
  const queryClient = useQueryClient();
  const [_, setResidentDataUser] = useState<residentType>();

  const { data: residentData, isLoading } = useQuery({
    queryKey: ["resident"],
    queryFn: getAllResidentData,
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
  };
};

export default ResidentHook;
