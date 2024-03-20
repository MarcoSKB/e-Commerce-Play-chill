import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[1292px] w-full px-4 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
