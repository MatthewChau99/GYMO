import React from "react";
import {Link, withRouter} from "react-router-dom";
import store from "../../../../states/store";
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink} from "shards-react";
import axios from "axios";

class UserActions extends React.Component {
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

    redirectToUserProfile() {
        console.log("redirecting");
        console.log(this.state.user._id);
        this.props.history.push({
            pathname:"user-profile-lite",
            state: {
                userID: this.state.user._id
            }
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
                    <DropdownItem onClick={this.redirectToUserProfile.bind(this)}>
                        <i className="material-icons">&#xE7FD;</i> Profile
                    </DropdownItem>
                    <DropdownItem tag={Link} to="add-new-post">
                        <i className="material-icons">post_add</i> Add New Post
                    </DropdownItem>
                </Collapse>
            </NavItem>
        );
    }
}

export default withRouter(UserActions);