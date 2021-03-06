import React from "react";
import {Container, Row, Col} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import BlogViews from "../components/user-profile-lite/BlogViews";
import AccountDetails from "../components/user-profile-lite/AccountDetails";

const UserProfile = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto"/>
        </Row>
        <Row>
            <Col lg="4">
                <UserDetails/>
                <AccountDetails/>
            </Col>
            <Col lg="8">
                <BlogViews/>
            </Col>
        </Row>
    </Container>
);

export default UserProfile;