import React from "react";

import CreateUserForm from "@/components/pages/users/partials/Form/CreateUserForm";

const Page = ({ params }: { params: any }) => {
  const { id } = params;

  return <CreateUserForm id={id} />;
};

export default Page;
