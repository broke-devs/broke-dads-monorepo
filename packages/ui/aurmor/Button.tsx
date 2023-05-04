import * as React from "react";
import "../styles.css";

type Button = {
  label?: string;
  color?: string;
  size?: string;
};
export const Button = ({
  label = "New Button",
  color = "grey",
  size = "small",
}: Button) => {
  return (
    <button
      style={{ fontSize: size === "large" ? "24px" : "14px" }}
      type="button"
      className={`w-full flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-${color}-100`}
    >
      {label}
    </button>
  );
};
