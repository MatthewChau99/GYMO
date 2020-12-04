import React, {Component} from "react";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: [],
            user: "user",
            userID: this.props.location.state.userID,
        };
        this.getFollowers(this.props.location.state.userID);
    }

    getFollowers(userID) {
        let self = this;
        let user_id = userID;
        axios.get(`/account/followers/${user_id}`,
            {params: {userID: user_id}}
        ).then(async (response) => {
            self.setState({
                followers: response.data["followers"]
            });
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        const {followers} = this.state;
        return (
            <OverlayTrigger trigger="click" placement="bottom-end" overlay={
                <Popover id="popover-basic" className="text-center">
                    <Popover.Title as="h3" size="lg">Followers</Popover.Title>
                    {followers.map((follower, index) => (
                    <Popover.Content>
                        <strong key={index}>{follower}</strong>
                        <br/>
                        <br/>
                    </Popover.Content>
                    ))}
                </Popover>
            }>
                <Button variant="light" className="text-center">Followers</Button>
            </OverlayTrigger>
        )

    }


}

export default withRouter(Followers);