import React from "react";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "react-bootstrap";


const popover = (
    <Popover id="popover-basic" className = "text-center">
      <Popover.Title as="h3" size ="lg">Followings</Popover.Title>
      <Popover.Content>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
        <br/>
        <br/>
        <strong>Xinman Zhang</strong>
      </Popover.Content>
    </Popover>
  );
  
  const Followings = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <Button variant="light" className = "text-center" >Followings</Button>
    </OverlayTrigger>
  );

  export default Followings;