import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import AddPost from "./AddPost";

export default () => (
  <Nav navbar className="border-left flex-row">
    <AddPost />
    <Notifications />
    <UserActions />
  </Nav>
);
