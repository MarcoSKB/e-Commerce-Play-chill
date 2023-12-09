import { ChangeEvent } from "react";

interface Props {
  type: "text" | "password";
  inputValue: string;
  setInputValue: (e: string) => void;
  placeholder?: string;
}

const Input: React.FC<Props> = (props) => {
  const { type, inputValue, setInputValue, placeholder = "" } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={(e) => setInputValue(e.target.value)}
      value={inputValue}
      className="px-6 py-4 w-full text-base font-normal bg-darkGray rounded-2xl focus:outline-none focus:outline-blue placeholder:opacity-20 placeholder:font-normal"
    />
  );
};

export default Input;
