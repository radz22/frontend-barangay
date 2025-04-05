import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cencusType } from "../../type/user/cencus-zod";
import {
  getAllData,
  createCencus,
  getUserCencusData,
  getUserCencusDataById,
  deleteById,
  deleteArchiveCencusbyId,
  restoredCencusbyId,
} from "../../services/staff/cencus-services";
import useCookie from "../cookie-hook";

import {
  handleSuccessAlert,
  handleErrorAlert,
} from "../../components/sweet-alert";
const CencusHook = () => {
  const { data } = useCookie();
  const queryClient = useQueryClient();
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [cencusDataUser, setCencusDataUser] = useState<cencusType>();

  useEffect(() => {
    if (data?.email) {
      setEmail(data.email);
    }
  }, [data]);
  const { data: cencusUserData } = useQuery<any, Error>({
    queryKey: ["cencus", email],
    queryFn: () => getUserCencusData(email),
    enabled: !!email,
  });
  const {
    data: cencusData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["cencus"],
    queryFn: getAllData,
  });
  const getCencusDataByIdMutation = useMutation({
    mutationFn: getUserCencusDataById,
    onSuccess: (data) => {
      setCencusDataUser(data.data);
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    },
  });
  const deleteCencusDataByIdMutation = useMutation({
    mutationFn: deleteById,
    onSuccess: () => {
      handleSuccessAlert("Permanently Deleted Succesfuly ");
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const createCencusMutation = useMutation({
    mutationFn: createCencus,
    onSuccess: () => {
      handleSuccessAlert("Submitted");
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const restoredCencusbyIdMutation = useMutation({
    mutationFn: restoredCencusbyId,
    onSuccess: () => {
      handleSuccessAlert("Restored Succesfuly ");
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const deleteArchiveCencusbyIdMutation = useMutation({
    mutationFn: deleteArchiveCencusbyId,
    onSuccess: () => {
      handleSuccessAlert("Deleted Succesfuly ");
      queryClient.invalidateQueries({ queryKey: ["cencus"] });
    },
    onError: (error: any) => {
      handleErrorAlert(error.response.data.error);
    },
  });
  const handleCreateCencus = (data: cencusType) => {
    createCencusMutation.mutate(data);
  };
  const handleGetUserCencusDataById = (id: string | undefined) => {
    getCencusDataByIdMutation.mutate(id);
  };
  const handleDelete = (id: string | null | undefined) => {
    deleteCencusDataByIdMutation.mutate(id);
  };

  const handleArchievedDelete = (id: string | null) => {
    deleteArchiveCencusbyIdMutation.mutate(id);
  };
  const handleRestore = (id: string | null | undefined) => {
    restoredCencusbyIdMutation.mutate(id);
  };
  return {
    handleCreateCencus,
    createCencusMutation,
    cencusData,
    isError,
    isLoading,
    cencusUserData,
    handleGetUserCencusDataById,
    cencusDataUser,
    handleDelete,
    deleteCencusDataByIdMutation,
    handleArchievedDelete,
    deleteArchiveCencusbyIdMutation,
    handleRestore,
    restoredCencusbyIdMutation,
  };
};

export default CencusHook;
