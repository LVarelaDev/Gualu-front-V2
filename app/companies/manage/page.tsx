import ManageContainerCompany from "@/modules/companies/components/containers/ManageContainerCompany";
import BackButton from "@/modules/core/components/common/BackButton";
import { Suspense } from "react";

interface Props {
  searchParams: { id?: string };
}
const page = ({ searchParams }: Props) => {
  const id = searchParams.id;
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border w-full">
        <BackButton />
      </div>
      <ManageContainerCompany id={id} />
    </div>
  );
};

export default page;
