import ContainerActions from "@/modules/contracts/acitions/components/ContainerActions";
import React from "react";

interface Props {
  params: { id: string };
}

const page = ({ params }: Props) => {
  return <ContainerActions cups={params.id} />;
};

export default page;
