import React from "react";
import { Container, Row, Col } from "shards-react";
import {
    CardDeck,
    Card,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    CardGroup
  } from 'react-bootstrap';

import PageTitle from "../components/common/PageTitle";

const about = () => (
    <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
        <PageTitle sm="4" subtitle="About Us" className="text-sm-left" />
    </Row>

    <Row>

    <Col lg="12" md="12">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/user-profile/yW5rN5v.jpeg")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{"color": 'white'}}>About us</h3>
                <p>Gymo is a student-made, innovative social network platform aiming to connect young people who love workout. We hope to build an online community for everyone who enjoys workout, want to give it a try or improve personal skills. Coaches, peers, workout plans, diet recipes… no matter what you are looking for about workout, we are more than happy to provide you with any information to achieve your goal.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/user-profile/955goS0.jpeg")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{"color": 'white'}}>About us</h3>
                <p>We gathered our thoughts among student body and noticed that it is especially difficult to meet workout needs during this current global pandemic. So we had this idea to build a social network app for workout lovers to connect with each other and share their thoughts momentarily. Small helper features are incorporated to better facilitate user’s workout plan including mini calorie calculator, body stats analysis etc.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/user-profile/WsxcQLW.jpeg")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{"color": 'black'}}>About us</h3>
                <p style={{"color": 'black'}}>Gymo is aiming to motivate users to work out more by doing so with friends. We want to make workout a more enjoyable and convenient experience and empower the larger workout community.
                    The one and only wish we have in building this app is to encourage more people to keep or start working out and stay healthy at this terrible time. We really do need each others’ support more than ever.</p>
                </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Col>
    <br />
    </Row>
    <br />
    <br />
    {/* Sidebar Widgets */}
    <Row>
    <Col lg="12" md="12">
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={require("../images/team-members/Rita.png")} />
                <Card.Body>
                    <Card.Title >Rita Xu</Card.Title>
                    <Card.Text>Scrum Master</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={require("../images/team-members/Xinman.jpeg")} />
                <Card.Body>
                    <Card.Title >Xinman Zhang</Card.Title>
                    <Card.Text>Product Owner</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={require("../images/team-members/Matthew.png")} />
                <Card.Body>
                    <Card.Title >Matthew Chau</Card.Title>
                    <Card.Text>Team Member</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={require("../images/team-members/Isaac.png")} />
                <Card.Body>
                    <Card.Title >Isaac Ling</Card.Title>
                    <Card.Text>Team Member</Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </Col>
    </Row>
</Container>
);

export default about;
