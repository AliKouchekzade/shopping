import { toast } from "react-toastify";

export const toastify = (message, type) => {
  const x = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };
  if (type === "success") toast.success(message, x);
  else if (type === "error") toast.error(message, x);
};
