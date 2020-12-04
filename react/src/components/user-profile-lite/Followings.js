import React, {Component} from "react";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {Button} from "react-bootstrap";
import {useLocation, withRouter} from "react-router-dom";
import axios from "axios";

class Followings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "user",
            userID: this.props.location.state.userID,
        };
    }



    render() {
        const follows = this.props.followings;
        return (
                <OverlayTrigger trigger="click" placement="bottom-start" overlay={
                    <Popover id="popover-basic" className="text-center">
                        <Popover.Title as="h3" size="lg">Followings</Popover.Title>
                        {follows.map((follow, idx) => (
                            <Popover.Content>
                                <strong key={idx}>{follow}</strong>
                                <br/>
                                <br/>
                            </Popover.Content>
                        ))}
                    </Popover>
                }>
                    <Button variant="light" className="text-center">Followings</Button>
                </OverlayTrigger>
        )
    }


}

export default withRouter(Followings);
