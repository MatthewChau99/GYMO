import React from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

const LikesAndComments = ({ lnum, cnum }) => {
    
    return (
        <ButtonGroup >
            
            <Button variant="outline-danger" size="sm">
            <i className="material-icons mr-1">favorite_border</i>
            {lnum}
            </Button>
            
            <Button as = {ButtonGroup} variant="outline-dark" size="sm" >
            <i className="material-icons mr-1">chat_bubble_outline</i>
            {cnum}
            </Button>

        </ButtonGroup>
    )
    
};

export default LikesAndComments;