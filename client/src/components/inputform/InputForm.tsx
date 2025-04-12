import { cn } from "../../utils/utils";

interface IInputform {
  value: string;
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

const InputForm: React.FC<IInputform> = ({
  value,
  placeHolder,
  onChange,
  disabled = false,
  className = "",
}) => {
  return (
    <input
      type="text"
      className={cn(
        "outline-none border-[1px] rounded p-1 px-2",
        "focus:border-indigo-400 focus:border-2 transition-colors duration-200  focus:shadow-indigo-400",
        className
      )}
      style={{ boxShadow: `0 0 0 2px  400 700 50` }}
      placeholder={placeHolder}
      onChange={onChange}
      disabled={disabled}
      value={value}
    />
  );
};

export default InputForm;
