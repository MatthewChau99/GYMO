import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Search from "../components/calorie-calculator/src/App"


const CalorieCalculator = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Food Calorie Calculator" subtitle="Daily Calorie Tracker" className="text-sm-left" />
    </Row>

    <Row>
      <Col lg="9" md="12">
        <Search />
      </Col>
    </Row>
  </Container>
);
export default CalorieCalculator;