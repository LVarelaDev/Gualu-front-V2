import CreateUserForm from "@/components/pages/users/partials/Form/CreateUserForm";
import React from "react";

const Page = ({ params }: { params: any }) => {
  const { id } = params;
  return <CreateUserForm id={id} />;
};

export default Page;
