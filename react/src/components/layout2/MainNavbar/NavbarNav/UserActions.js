import React from "react";
<<<<<<< HEAD
import {Link} from "react-router-dom";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    NavItem,
    NavLink
} from "shards-react";
import store from "../../../../states/store";
import axios from "axios";

export default class UserActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            user: store.getState().user,
            userAvatar: ""
        };

        this.toggleUserActions = this.toggleUserActions.bind(this);
        this.getPic();
    }

    toggleUserActions() {
        this.setState({
            visible: !this.state.visible
        });
    }

    getPic() {
        axios.get(`/pic/${this.state.user.pictureID}`, {
            params: {
                picID: this.state.user.pictureID
            }
        }).then(async (response) => {
            if (response.status === 200) {
                this.setState({
                    userAvatar: response.data
                })
            }
        }).catch(
            function (error) {
                console.error(error);
            }
        )
    }

    render() {
        return (
            <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
                <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                    <img
                        className="user-avatar rounded-circle mr-2"
                        src={`url(${this.state.userAvatar}`}
                        alt="User Avatar"
                    />
                    <span className="d-none d-md-inline-block ">Xinman Zhang</span>
                </DropdownToggle>
                <Collapse tag={DropdownMenu} right small open={this.state.visible}>
                    <DropdownItem tag={Link} to="user-profile">
                        <i className="material-icons">&#xE7FD;</i> Profile
                    </DropdownItem>
                    {/* <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem> */}
                    <DropdownItem tag={Link} to="components-overview">
                        <i class="material-icons">&#xea5f;</i> Calorie Burned
                    </DropdownItem>
                    <DropdownItem tag={Link} to="add-new-post">
                        {/* <i className="material-icons">&#xE2C7;</i> Add A New Post */}
                        <i className="material-icons">post_add</i> Add New Post
                    </DropdownItem>
                    <DropdownItem tag={Link} to="transaction-history">
                        <i className="material-icons">&#xE896;</i> Transactions
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem tag={Link} to="/" className="text-danger">
                        <i className="material-icons text-danger">&#xE879;</i> Logout
                    </DropdownItem>
                </Collapse>
            </NavItem>
        );
    }
=======
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/0.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block ">Xinman Zhang</span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          {/* <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem> */}
          <DropdownItem tag={Link} to="components-overview">
          <i class="material-icons">&#xea5f;</i> Calorie Burned
          </DropdownItem>
          <DropdownItem tag={Link} to="add-new-post">
            {/* <i className="material-icons">&#xE2C7;</i> Add A New Post */}
            <i className="material-icons">post_add</i> Add New Post
          </DropdownItem>
          <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem tag={Link} to="/" className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
>>>>>>> frontend-ran
}
