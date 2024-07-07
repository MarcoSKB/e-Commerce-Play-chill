import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputField(props: Props) {
  const {} = props;
  return <input {...props} className="flex px-3 py-[10px]" />;
}
