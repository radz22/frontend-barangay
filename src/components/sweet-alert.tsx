import Swal from "sweetalert2";

export const handleSuccessAlert = (alertText: string) => {
  Swal.fire({
    title: alertText,
    icon: "success",
    timer: 2000, // 2 seconds
    timerProgressBar: true,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
export const handleErrorAlert = (alertText: string) => {
  Swal.fire({
    title: "Oops...",
    text: alertText,
    icon: "error",
  });
};
