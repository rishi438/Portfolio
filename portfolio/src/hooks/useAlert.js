/* eslint-disable */
import { useState } from "react";

const useAlert = () => {
  const [alert, set_alert] = useState({
    show: false,
    text: "",
    type: "success",
  });
  const show_alert = ({ text, type = "danger" }) =>
    set_alert({
      show: true,
      text,
      type,
    });
  const hide_alert = ({ text, type = "danger" }) =>
    set_alert({
      show: false,
      text: "",
      type: "danger",
    });
  return { alert, show_alert, hide_alert };
};

export default useAlert;
