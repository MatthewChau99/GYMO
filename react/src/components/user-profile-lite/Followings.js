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
            follows: [],
            user: "user",
            userID: this.props.location.state.userID,
        };
        this.getFollowings(this.props.location.state.userID);
        console.log(this.props.location.state.userID);
    }

    getFollowings(userID) {
        let self = this;
        let user_id = userID;
        axios.get(`/account/follows/${user_id}`,
            {params: {userID: user_id}}
        ).then(async (response) => {
            self.setState({
                follows: response.data["follows"]
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const {follows} = this.state;
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
