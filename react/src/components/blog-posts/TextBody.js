import React from "react";

import {CardBody, Badge} from "shards-react";
import {Card, CardImg} from 'react-bootstrap';


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import LikesAndComments from "./LikesAndcomments";


const TextBody = ({backgroundImage, badge, title, text, days, lnum, cnum, addLike}) => {

    return (
        <Card
            className="card-post card-post--1"
            style={{width: '48rem'}}
        >
            {/* <div
        className="card-post__image"
        style={{ backgroundImage: `url(${require({backgroundImage})})` }}
      > */}
            <Card.Img variant="top" src={backgroundImage}/>
            <Badge
                pill
                className={`card-post__category bg-${"dark"}`}
            >
                {badge}
            </Badge>
            {/* </div> */}

            <CardBody>

                <Card.Title className="text-center mb-5">
                    {title}
                </Card.Title>

                <Card.Text className="d-inline-block mb-5">
                    {/* {text} */}
                    <div  dangerouslySetInnerHTML={{ __html: text }} ></div>
                </Card.Text>

                {/* <Button variant="primary" >Go Back</Button> */}
                <br/>
                <LikesAndComments lnum={lnum} cnum={cnum} addLike={addLike}/>

            </CardBody>
            <Card.Footer className="text-muted">{days.toString().substring(0, 10) + " " + days.toString().substring(11, 16)}</Card.Footer>

        </Card>
    )
};

export default TextBody;
