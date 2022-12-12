import React from "react";
import OwnerLayout from "../../../components/OwnerLayout";
import AppDrawerAdmin from "../../../serverlets/AppDrawerAdmin";
import AppHeaderAdmin from "../../../serverlets/AppHeaderAdmin";
import Copyright from "../../../serverlets/Copyright";
import { withAuthSync } from "../../../utils/withAuthSync";

const Faculties = () => {
  return (
    <>
      <OwnerLayout>
        <AppHeaderAdmin isroot={true} />
        <div id="appCapsule">
          <Copyright />
        </div>
        <AppDrawerAdmin onchat={false} menuitem="faculties" />
      </OwnerLayout>
    </>
  );
};

export default withAuthSync(Faculties);
