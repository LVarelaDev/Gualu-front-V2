import React from "react";

interface Props {
  message: string;
}

const Subtitle = ({ message }: Props) => {
  return <p className="text-base font-bold text-slate-600">{message}</p>;
};

export default Subtitle;
