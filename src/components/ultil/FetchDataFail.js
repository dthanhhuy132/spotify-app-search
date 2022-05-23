import { toast } from "react-toastify";

export default function getDataFail() {
  toast.warn("The authentication code has not actived yet, please try again", {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  });
  setTimeout(() => window.location.assign("/"), 3000);
}
