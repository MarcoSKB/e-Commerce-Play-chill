import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input } from "@/src/components/ui";
import { ILoginFormInputs } from "../../UserAuthForm/UserAuthForm";

interface Props {
  register: UseFormRegister<ILoginFormInputs>;
  errors: FieldErrors<ILoginFormInputs>;
}

const PasswordInput: React.FC<Props> = (props) => {
  const { register, errors } = props;

  return (
    <label className="flex flex-col gap-3">
      <span
        className={`text-lg font-medium ${
          errors.password ? "text-rose-500" : "opacity-40"
        }`}
      >
        Password {errors.password && "*"}
      </span>
      <Input
        type="password"
        placeholder="Please enter your password..."
        inputAtttibutes={{
          ...register("password", {
            required: true,
            minLength: 8,
          }),
        }}
      />
    </label>
  );
};

export default PasswordInput;
