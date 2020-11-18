import React from "react";
import { Nav, NavItem } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import AddPost from "./AddPost";
import LogIn from "./LogIn";


export default () => (
  <Nav navbar className="border-left flex-row flex-nowrap p-1">
    <AddPost />
    <Notifications />
    <UserActions />
    <LogIn />
  </Nav>
);
