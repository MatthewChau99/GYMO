import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import store from "../states/store";
import AuthError from "../views/AuthError";
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";
import {connect} from "react-redux";


class UserProfileLite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: store.getState().loginStatus,
            updatedName: "",
            updatedPhone: "",
            updatedPassword: "",
        };

    }

    render() {
        if (store.getState().loginStatus) {
            return (
                <Container fluid className="main-content-container px-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto"/>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <UserDetails/>
                        </Col>
                        <Col lg="8">
                            <UserAccountDetails/>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (<AuthError/>);
        }

    }
}

const mapStateToProps = state => ({
    state
});

export default connect(
    mapStateToProps,
)(UserProfileLite);