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
            userAvatar: '',
            visible: false,
            getPic: false
        };

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

    getPic() {
        const self = this;
        self.setState({
            userAvatar: require("../../../../images/avatars/" + self.state.user.name[0].toUpperCase() + ".png"),
            getPic: true
        });
    }

    render() {
        if (!this.state.getPic) {
            this.getPic();
        }
        return (
            <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
                <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                    <img
                        className="user-avatar rounded-circle mr-2"
                        src={this.state.userAvatar}
                        alt="User Avatar"
                    />{" "}
                    <span className="d-none d-md-inline-block">{this.state.user.name}</span>
                </DropdownToggle>
                <Collapse tag={DropdownMenu} right small open={this.state.visible}>
<<<<<<< HEAD
                    <DropdownItem tag={Link} to={{
                                pathname: 'user-profile-lite',
                                search: `?userID=${this.state.user._id}`,
                                state: {userID: this.state.user._id}
                            }}>
=======
                    <DropdownItem tag={Link} to={{pathname:"user-profile-lite", state: {userID: this.state.user._id}}}>
>>>>>>> 7ef8ca92d68c4e06e7880cc33c290ac7b57b3268
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
