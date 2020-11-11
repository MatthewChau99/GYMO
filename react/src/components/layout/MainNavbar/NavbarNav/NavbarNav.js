import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import AddPost from "./AddPost";
import LogIn from "./LogIn";

export default () => (
  <Nav navbar className="border-left flex-row">
    <AddPost />
    <Notifications />
     <UserActions /> 
    <LogIn />
  </Nav>
);
