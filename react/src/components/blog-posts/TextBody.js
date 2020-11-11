import React from "react";

import { CardBody, Badge } from "shards-react";
import { Card, CardImg } from 'react-bootstrap';


import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import LikesAndComments from "./LikesAndcomments";


const TextBody = ({ backgroundImage, badge, title, text, days, lnum, cnum }) => {
  
  return(  
    <Card 
      className="card-post card-post--1"
      style={{ width: '48rem' }}
      >
      {/* <div
        className="card-post__image"
        style={{ backgroundImage: `url(${require({backgroundImage})})` }}
      > */}
      <Card.Img variant = "top" src = {backgroundImage} />
        <Badge
          pill
          className={`card-post__category bg-${"dark"}`}
        >
          {badge}
        </Badge>
      {/* </div> */}

      <CardBody>
        
          <Card.Title className ="text-center mb-5">
            {title}
          </Card.Title>

          <Card.Text className="d-inline-block mb-5">
            {text}
          </Card.Text>

          {/* <Button variant="primary" >Go Back</Button> */}
          <br />
          <LikesAndComments lnum = {lnum} cnum = {cnum} />
        
      </CardBody>
      <br />
      <Card.Footer className ="text-muted">{days}</Card.Footer>

    </Card>
  )
};

export default TextBody;
