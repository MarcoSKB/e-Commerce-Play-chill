import { UseFormRegister } from "react-hook-form";

import { InputField } from "../../elements";
import { UserProfileInputs } from "../../../@mainContent/(account)/page";

interface Props {
  register: UseFormRegister<UserProfileInputs>;
  loading: boolean;
}

export default function UsernameFields(props: Props) {
  const { register, loading } = props;
  return (
    <div className="flex flex-col gap-4 max-w-[256px] w-full">
      <InputField
        {...register("username", { required: true })}
        loading={loading}
        type="text"
        label="Username"
      />
      <InputField
        {...register("email", { required: true })}
        loading={loading}
        type="text"
        label="Email"
      />
    </div>
  );
}
