import { Input } from "@/src/components/ui";
import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { IRegisterFormInputs } from "../../RegisterForm/RegisterForm";

interface Props {
  register: UseFormRegister<IRegisterFormInputs>;
  errors: FieldErrors<IRegisterFormInputs>;
  watch: UseFormWatch<IRegisterFormInputs>;
}

const PasswordInput: React.FC<Props> = (props) => {
  const { register, errors, watch } = props;

  return (
    <label className="flex flex-col gap-3">
      <span
        className={`text-lg font-medium ${
          errors.pass || errors.repeatPass ? "text-rose-500" : "opacity-40"
        }`}
      >
        Password {(errors.repeatPass || errors.pass) && "*"}
      </span>
      <Input
        placeholder="Password"
        type="password"
        inputAtttibutes={{
          ...register("pass", {
            required: true,
            minLength: 8,
          }),
        }}
      />
      <Input
        placeholder="Please repeat your password"
        type="password"
        inputAtttibutes={{
          ...register("repeatPass", {
            required: true,
            validate: (val: string) => {
              if (watch("pass") != val) {
                return "Your passwords do no match";
              }
            },
          }),
        }}
      />
    </label>
  );
};

export default PasswordInput;
