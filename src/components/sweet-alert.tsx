import Swal from "sweetalert2";

export const handleSuccessAlert = (alertText: string) => {
  Swal.fire({
    title: "Good job!",
    text: alertText,
    icon: "success",
  });
};
export const handleErrorAlert = (alertText: string) => {
  Swal.fire({
    title: "Oops...",
    text: alertText,
    icon: "error",
  });
};
