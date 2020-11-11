import React from "react";
import {Button, DropdownItem} from "shards-react";
import {LogoutAction} from "../../../../states/actions";
import connect from "react-redux/es/connect/connect";

class Logout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    updateLogout(event) {
        event.preventDefault();
        console.log("logging out");
        this.props.loginState();
    }

    render() {
        return (
            <DropdownItem className="nav-link-icon center" onClick={(event) => this.updateLogout(event)}>
                <i className="material-icons" onClick={(event) => this.updateLogout(event)}>
                    account_circle
                </i> Logout
            </DropdownItem>
        );
    }
}

const mapStateToProps = state => {
    return{
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginState: () => dispatch(LogoutAction())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Logout);