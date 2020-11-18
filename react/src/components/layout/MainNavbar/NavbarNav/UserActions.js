import React from "react";
import {Link} from "react-router-dom";
import store from "../../../../states/store";
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink} from "shards-react";
import axios from "axios";

export default class UserActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: store.getState().user,
            userAvatar: require("../../../../cache/default.jpg"),
            visible: false
        };

        this.getPic(this.state.user.pictureID);
        this.toggleUserActions = this.toggleUserActions.bind(this);
    }

    toggleUserActions() {
        this.setState({
            visible: !this.state.visible
        });
    }

    myChangeHandler = (event) => {
        this.setState({username: event.target.value})
    };

    getPic(picID) {
        if (picID) {
            axios.get(`/pic/${picID}`, {
                params: {
                    picID: picID
                }
            }).then(async (response) => {
                this.setState({
                    userAvatar: `data:image/png;base64, ${response.data}`
                });
            }).catch(
                function (error) {
                    console.error(error);
                }
            );
        }
    }

    render() {
        return (
            <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
                <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                    <img
                        className="user-avatar rounded-circle mr-2"
                        style={{width: 45, height: 45}}
                        src={this.state.userAvatar}
                        alt="User Avatar"
                    />{" "}
                    <span className="d-none d-md-inline-block">{this.state.user.name}</span>
                </DropdownToggle>
                <Collapse tag={DropdownMenu} right small open={this.state.visible}>
                    <DropdownItem tag={Link} to="user-profile-lite">
                        <i className="material-icons">&#xE7FD;</i> Profile
                    </DropdownItem>
                    {/* <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem> */}
                    <DropdownItem tag={Link} to="add-new-post">
                        {/* <i className="material-icons">&#xE2C7;</i> Add A New Post */}
                        <i className="material-icons">post_add</i> Add New Post
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem tag={Link} to="/" className="text-danger">
                        <i className="material-icons text-danger">&#xE879;</i> Logout
                    </DropdownItem>
                </Collapse>
            </NavItem>
        );
    }
}
