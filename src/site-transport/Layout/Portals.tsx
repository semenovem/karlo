import React from "react";
import {useLocation} from "react-router-dom";

import Portal from "portals/Top";
import QuickContacts from "../cnt/QuickContacts";

import * as loc from "constants/locations"

export interface Props {
  children?: React.ReactElement;
}


const regTestQuickContacts = new RegExp(`${loc.quickContacts}$`, "i")

export default function Portals() {
  const location = useLocation();

  // useEffect(() => {
  //   console.log("Location changed", location.pathname);
  //   console.log(">>>>>>>>>>>>>>> ", regTestQuickContacts.test(location.pathname))
  // }, [location]);

  console.log(">>>>>>>>>>>>>>> ", regTestQuickContacts.test(location.pathname))

  if (regTestQuickContacts.test(location.pathname)) {
    return <Portal>
      <QuickContacts/>
    </Portal>
  }

  return null
}


