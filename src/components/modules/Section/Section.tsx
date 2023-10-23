import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<Props> = (props) => {
  const { title, className, children } = props;
  return (
    <div className={`${className}`}>
      <h2 className="text-[32px] font-semibold mb-5">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
