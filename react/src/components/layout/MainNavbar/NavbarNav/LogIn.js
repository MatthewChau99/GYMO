import React from "react";
import { Link } from "react-router-dom";
import { Button, DropdownItem } from "shards-react";

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  render() {
    return (
      //   <Button
      //     type="submit"
      //     variant = "primary"
      //     tag={Link} to=""
      //     size="md" active
      //   >
      //     Log In
      //   </Button>
      <DropdownItem tag={Link} to="login" className="nav-link-icon center">
        <Link className="nav-link-icon" to="/login">
          <i className="material-icons">account_circle</i> Log In
        </Link>
      </DropdownItem>
    );
  }
}

//          <i className="material-icons">account_circle</i> {this.state.isLoggedIn? 'Login' : 'Logout'}

