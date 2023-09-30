"use client";
import { ErrorProps } from "./props";
import { FiAlertCircle } from "react-icons/fi";

export const Error: React.FC<ErrorProps> = (props) => {
  const { label } = props;
  return (
    <small className="text-text-error flex flex-row items-center gap-2 font-semibold ">
      <FiAlertCircle /> {label as string}
    </small>
  );
};
