import { UseFormRegister } from "react-hook-form";

import { InputField } from "../../elements";
import { UserProfileInputs } from "../../../@mainContent/(account)/page";

interface Props {
  register: UseFormRegister<UserProfileInputs>;
}

export default function UsernameFields({ register }: Props) {
  return (
    <div className="flex flex-col gap-4 max-w-[256px] w-full">
      <InputField
        {...register("username", { required: true })}
        type="text"
        label="Username"
      />
      <InputField
        {...register("email", { required: true })}
        type="text"
        label="Email"
      />
    </div>
  );
}
