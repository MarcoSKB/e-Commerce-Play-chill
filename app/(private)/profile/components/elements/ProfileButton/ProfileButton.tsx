"use client";
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  /** @defaultValue 'green' */
  color?: "red" | "green";
  /** @defaultValue 'button' */
  type?: "submit" | "button";
}

const ProfileButton: React.FC<Props> = (props) => {
  const { children, onClick, color, type = "button" } = props;

  if (color == "red") {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full py-[8px] px-5 font-medium text-center text-red bg-black border-2 border-black rounded-lg transition-all hover:border-red active:scale-95"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full py-[8px] px-5 font-medium text-center text-green border-2 border-green rounded-lg transition-all hover:bg-green hover:text-black active:scale-95"
    >
      {children}
    </button>
  );
};

export default ProfileButton;
