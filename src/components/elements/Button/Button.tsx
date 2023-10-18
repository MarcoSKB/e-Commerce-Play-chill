import React from "react";

interface Props {
  title: string;
  type?: "default" | "outline";
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  const { title, type = "default", onClick } = props;

  if (type === "outline") {
    return (
      <button
        type="button"
        onClick={onClick}
        className="py-6 px-10 border-2 border-solid border-white border-opacity-[0.1] rounded-2xl text-lg font-semibold bg-transparent hover:scale-95 transition-transform"
      >
        {title}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="py-6 px-10 border-2 border-solid bg-green border-green rounded-2xl text-lg font-semibold hover:scale-95 transition-transform"
    >
      {title}
    </button>
  );
};

export default Button;
