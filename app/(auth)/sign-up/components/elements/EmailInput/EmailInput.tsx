import { FieldErrors, UseFormRegister } from "react-hook-form";

import { Input } from "@/src/components/ui";
import { IRegisterFormInputs } from "../../RegisterForm/RegisterForm";

interface Props {
  register: UseFormRegister<IRegisterFormInputs>;
  errors: FieldErrors<IRegisterFormInputs>;
}

const EmailInput: React.FC<Props> = (props) => {
  const { register, errors } = props;

  return (
    <label className="flex flex-col gap-3">
      <span
        className={`text-lg font-medium ${
          errors.email ? "text-rose-500" : "opacity-40"
        }`}
      >
        Email {errors.email && "*"}
      </span>
      <Input
        placeholder="Please enter your email address..."
        type="email"
        inputAtttibutes={{
          ...register("email", {
            required: true,
          }),
        }}
      />
    </label>
  );
};

export default EmailInput;
