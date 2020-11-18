import React from "react";
import { Link } from "react-router-dom";
import { Collapse, Row } from "shards-react";
import LogIn from "./LogIn";
//import Logout from "./Logout";
import UserActions from "./UserActions";
import Notifications from "./Notifications";
import AddPost from "./AddPost";

export default class LoginStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: true,
      logout: false
    };
  }

  render() {
    return (
        <Row>
          <Collapse open={this.state.login}>
            <LogIn />
          </Collapse>
          <Collapse open={this.state.logout}>
            <Row>
              <AddPost />
              <Notifications />
              <UserActions />
              {/*<Logout />*/}
            </Row>
          </Collapse>
        </Row>
    );
  }
}
