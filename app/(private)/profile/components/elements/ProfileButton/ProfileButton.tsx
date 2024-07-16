"use client";
import { LoadingSpin } from "@/src/components/ui";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  /** @defaultValue 'green' */
  color?: "red" | "green";
  /** @defaultValue 'button' */
  type?: "submit" | "button";
  /** @defaultValue 'false' */
  loading?: boolean;
}

const ProfileButton: React.FC<Props> = (props) => {
  const { children, onClick, color, type = "button", loading = false } = props;

  if (color == "red") {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={loading}
        className="flex justify-center items-center gap-[2px] w-full py-[8px] px-5 font-medium text-red bg-black border-2 border-black rounded-lg transition-all hover:border-red active:scale-95 disabled:pointer-events-none disabled:text-white disabled:text-opacity-30 disabled:border-[#211E2A]"
      >
        {loading && <LoadingSpin color="#211E2A" width={20} height={20} />}
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="flex justify-center items-center gap-[2px] w-full py-[8px] px-5 font-medium text-green border-2 border-green rounded-lg transition-all hover:bg-green hover:text-black active:scale-95 disabled:pointer-events-none disabled:text-white disabled:text-opacity-30 disabled:border-[#211E2A]"
    >
      {loading && <LoadingSpin color="#211E2A" width={22} height={22} />}
      {children}
    </button>
  );
};

export default ProfileButton;
