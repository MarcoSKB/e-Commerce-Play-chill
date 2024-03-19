"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

import { LoadingSpin } from "@/src/components/ui";

interface Props {
  token: string;
}

const Verification: React.FC<Props> = (props) => {
  const { token } = props;
  const router = useRouter();
  const checkVerification = async () => {
    try {
      await axios.post(`/api/auth/confirmation/${token}`);
      toast.success("Succesfully verified");
      router.replace("/sign-in");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return toast.error("There was a problem", {
          description: error.response?.data.error,
        });
      }
      toast.error("There was a problem");
      router.replace("/sign-in");
    }
  };
  checkVerification();

  return (
    <div className="flex flex-col items-center justify-center gap-y-6 px-4 py-8 max-w-[600px] min-h-[80px] mx-auto my-[120px] rounded-2xl border border-white border-opacity-10">
      <h2 className="text-3xl">Confirm your email</h2>
      <div className="flex items-center">
        <LoadingSpin width={24} height={24} />
        <span className="text-2xl font-bold text-blue">Verification</span>
      </div>
    </div>
  );
};

export default Verification;
