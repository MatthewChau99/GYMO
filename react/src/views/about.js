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
                <h3>First slide label</h3>
                <p>Our mission is to organize the world’s information and make it universally accessible and useful.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/user-profile/955goS0.jpeg")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../images/user-profile/WsxcQLW.jpeg")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                <Card.Img variant="top" src={require("../images/avatars/1.jpg")} />
                <Card.Body>
                    <Card.Title > Rita Xu</Card.Title>
                    <Card.Text> product owner</Card.Text>
                </Card.Body>
            </Card> 

            <Card>
                <Card.Img variant="top" src={require("../images/avatars/0.jpg")} />
                <Card.Body>
                    <Card.Title > Xinman Zhang</Card.Title>
                    <Card.Text> product owner</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={require("../images/avatars/2.jpg")} /> 
                <Card.Body>
                    <Card.Title > Matthew Chau</Card.Title>
                    <Card.Text> team member</Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src={require("../images/avatars/3.jpg")} /> 
                <Card.Body>
                    <Card.Title > Isaac Ling</Card.Title>
                    <Card.Text> team member</Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </Col>
    </Row>
</Container>
);

export default about;
