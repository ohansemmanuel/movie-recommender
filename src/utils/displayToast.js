import { toast } from "react-toastify";

/**
 * Handles the displays of User Feedback Messages in the App.
 * @return {Function} - a function call to the toast library
 */
export default function displayToast(messages, config = {}) {
  const options = {
    autoClose: true,
    closeButton: true,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.TOP_LEFT,
    ...config
  };

  if (Array.isArray(messages)) {
    return messages.map(message => {
      return toast(message, options);
    });
  }
  if (typeof messages === "string") {
    return toast(messages, options);
  }

  console.error(
    "supplied param to _displayAppMessages is NOT an Array or a String"
  );
  return;
}
