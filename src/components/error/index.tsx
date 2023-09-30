"use client";
import { TESTS } from "@/strings";
import { ErrorProps } from "./props";
import { FiAlertCircle } from "react-icons/fi";

export const Error: React.FC<ErrorProps> = (props) => {
  const { label } = props;
  return (
    <small
      data-testid={TESTS.ERROR}
      className="text-text-error flex flex-row items-center gap-2 font-semibold "
    >
      <FiAlertCircle data-testid={TESTS.ERROR_ICON} /> {label as string}
    </small>
  );
};
