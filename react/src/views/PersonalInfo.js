import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DetailInfo from "../components/user-profile-lite/DetailInfo";

const PersonalInfo = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Personal Information" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>

      <Col lg="8">
        <DetailInfo />
      </Col>
    </Row>
  </Container>
);

export default PersonalInfo;
