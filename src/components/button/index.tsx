"use client";
import { ButtonProps } from "./props";

export const Button: React.FC<ButtonProps> = (props) => {
  const { label, onPress, variant = "PRIMARY", type } = props;
  const selectLabel = {
    PRIMARY:
      "bg-text-white font-bold text-primary hover:bg-[#57099E] hover:text-text-white hover:border-text-white ",
    SECONDARY:
      "bg-primary font-normal text-text-white hover:bg-[#57099E] hover:text-text-white hover:border-text-white px-8",
    LINK: "text-text-white",
  };
  return (
    <button
      onClick={() => onPress && onPress()}
      type={type}
      className={`w-full p-4 rounded-full transition ease-in-out duration-300 ${selectLabel[variant]}`}
    >
      {label}
    </button>
  );
};
