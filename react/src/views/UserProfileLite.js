import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import store from "../states/store";
import AuthError from "../views/AuthError";
import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import {connect} from "react-redux";
import BlogViews from "../components/user-profile-lite/BlogViews";
import {useLocation, withRouter} from "react-router-dom";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";


class UserProfileLite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: store.getState().loginStatus,
            user: store.getState().user,
            updatedName: "",
            updatedPhone: "",
            updatedPassword: "",
            userID: this.props.location.state.userID
        };
    }


    render() {
        console.log(this.props.location.state.userID);
        if (store.getState().loginStatus) {
            return (
                <Container fluid className="main-content-container px-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto"/>
                    </Row>
                    <Row>
                        <Col lg="4">
                            <UserDetails userID={this.props.location.state.userID}/>
                            {this.state.userID === this.state.user._id ? <UserAccountDetails userID={this.props.location.state.userID}/> : ""}
                        </Col>
                        <Col lg="8">
                            <BlogViews userID={this.props.location.state.userID}/>
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