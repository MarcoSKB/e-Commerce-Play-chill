import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input } from "@/src/components/ui";
import { ILoginFormInputs } from "../../UserAuthForm/UserAuthForm";

interface Props {
  register: UseFormRegister<ILoginFormInputs>;
  errors: FieldErrors<ILoginFormInputs>;
}

const UsernameInput: React.FC<Props> = (props) => {
  const { register, errors } = props;

  return (
    <label className="flex flex-col gap-3">
      <span
        className={`text-lg font-medium opacity-40 ${
          errors.username ? "text-rose-500" : "opacity-40"
        }`}
      >
        Username {errors.username && "*"}
      </span>
      <Input
        type="text"
        placeholder="Please enter your username..."
        inputAtttibutes={{
          ...register("username", {
            required: true,
            minLength: 4,
          }),
        }}
      />
    </label>
  );
};

export default UsernameInput;
