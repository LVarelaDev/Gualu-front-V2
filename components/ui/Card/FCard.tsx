import React, { ReactNode } from "react";

type FCardProps = {
  children: ReactNode;
  title: string;
  border?: boolean;
};
const FCard = ({ children, title, border }: FCardProps) => {
  return (
    <div
      className={`${border ? "border" : ""} rounded-xl shadow flex flex-col gap-6 p-4 bg-white`}
    >
      <p className="text-base font-bold text-slate-600">{title}</p>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
};

export default FCard;
