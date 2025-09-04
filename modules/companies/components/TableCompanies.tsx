"use client";
import type { Company } from "@/modules/companies/interfaces/company";
import { useRouter } from "next/navigation";

interface Props {
  data: Company[];
}
const TableCompanies = ({ data }: Props) => {
  console.log("data", data);
  const router = useRouter();
  return <div></div>;
};

export default TableCompanies;
