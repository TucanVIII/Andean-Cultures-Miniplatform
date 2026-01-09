import { toast } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 4000,
  pauseOnHover: true,
  draggable: true,
};

export const notify = {
  success: (message, options = {}) =>
    toast.success(message, { ...defaultOptions, ...options }),

  error: (message, options = {}) =>
    toast.error(message, { ...defaultOptions, ...options }),

  warning: (message, options = {}) =>
    toast.warning(message, { ...defaultOptions, ...options }),

  info: (message, options = {}) =>
    toast.info(message, { ...defaultOptions, ...options }),
};
