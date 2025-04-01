import React from "react";

import { CardWrapper } from "@/components/auth/CardWrapper";
function page() {
  return (
    <CardWrapper
      headerLabel="Create an Account"
      backButtonHref=""
      backButtonLabel="Already have an account?"
      showSocial
    >
      <div className=" text-red-500">
        Appologies ! Currently the server is not working, Please contact
        developer
      </div>
    </CardWrapper>
  );
}

export default page;
