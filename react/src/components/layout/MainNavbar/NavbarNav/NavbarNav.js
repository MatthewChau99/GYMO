import React from "react";
import {Nav} from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";
import AddPost from "./AddPost";
import LogIn from "./LogIn";
import Logout from "./Logout";
import {useSelector} from "react-redux";

export default () => {
    const loginState = useSelector(state => state.loginStatus);

    return (
        <Nav navbar className="border-left flex-row flex-nowrap p-1">
            <AddPost/>
            <Notifications/>
            {loginState ? <UserActions/> : ""}
            {loginState ? <Logout/> : <LogIn/>}
        </Nav>
    );
};
