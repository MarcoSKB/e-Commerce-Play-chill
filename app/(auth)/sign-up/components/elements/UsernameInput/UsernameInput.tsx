import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input } from "@/src/components/ui";
import { IRegisterFormInputs } from "../../RegisterForm/RegisterForm";

interface Props {
  register: UseFormRegister<IRegisterFormInputs>;
  errors: FieldErrors<IRegisterFormInputs>;
}

const UsernameInput: React.FC<Props> = (props) => {
  const { register, errors } = props;

  return (
    <label className="flex flex-col gap-3">
      <span
        className={`text-lg font-medium ${
          errors.username ? "text-rose-500" : "opacity-40"
        }`}
      >
        Username {errors.username && "*"}
      </span>
      <Input
        placeholder="Please enter your username..."
        type="text"
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
