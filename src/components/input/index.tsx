//#region
import { useFormContext } from "react-hook-form";
import { InputProps } from "./props";
import { FiAlertCircle } from "react-icons/fi";
//#endregion

export const Input: React.FC<InputProps> = (props) => {
  const { name, placeholder, label } = props;
  const methods = useFormContext();
  const error = methods.formState.errors[name];
  const errorStyle = "ring-[#FF0404]";

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-text-disabled" htmlFor={name}>
        {label}
      </label>
      <input
        {...props}
        id={name}
        placeholder={placeholder}
        {...methods.register(name)}
        className={`p-4 ring-2 ring-primary/40 rounded-sm w-full ${
          error && errorStyle
        }`}
      />
      {error?.message && (
        <small className="text-[#FF0404] flex flex-row items-center gap-2 font-semibold">
          <FiAlertCircle /> {error.message as string}
        </small>
      )}
    </div>
  );
};
