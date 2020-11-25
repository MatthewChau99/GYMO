import React, {Component} from "react";
import {Container, Row, Col} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DetailInfo from "../components/user-profile-lite/DetailInfo";
import AuthError from "./AuthError";
import store from "../states/store";

class PersonalInfo extends Component {

    render() {
        if (store.getState().loginStatus) {
            {
                return (<Container fluid className="main-content-container px-4">
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="Personal Information" subtitle="Overview" md="12"
                                   className="ml-sm-auto mr-sm-auto"/>
                    </Row>
                    <Row>
                        <Col lg="8">
                            <DetailInfo/>
                        </Col>
                    </Row>
                </Container>);
            }
        } else {
            return (
                <Container fluid className="main-content-container px-4">
                    <AuthError/>
                </Container>
            );
        }
    }
}


export default PersonalInfo;
