import React, { useEffect } from "react";

function Sidebar({ setshowadmin }) {
  useEffect(() => {
    setshowadmin(true);
  }, []);

  return <div>Sidebar</div>;
}

export default Sidebar;
