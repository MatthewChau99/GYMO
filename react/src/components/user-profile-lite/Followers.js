import React, {Component} from "react";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Button } from "react-bootstrap";
import {useLocation, withRouter} from "react-router-dom";
import axios from "axios";

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        followers: [],
        userID : this.props.userID,
    };
    this.getFollowers(this.props.userID);
  }

  async getFollowers(userID){
    let user_id = userID;
        axios.get(`/follower/${user_id}`,
            {params: {userID: user_id}}
        ).then(async (response) => {
            const follower = response.data["followers"];
            for (let i = 0; i < follower.length; i++){
              this.setState({
                followers: this.state.followers.concat(follower[i])
              });
            }
        }).catch(function (error) {
            console.log(error);
        })
  }

  render() {
    const {followers} = this.state;
    return (
      followers.map((follower,idx) => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={
          <Popover id="popover-basic" className = "text-center">
        <Popover.Title as="h3" size ="lg">Followers</Popover.Title>
        <Popover.Content>
          <strong>{follower.name}</strong>
          <br/>
          <br/>
        </Popover.Content>
      </Popover>
        }>
          <Button variant="light" className = "text-center" >Followers</Button>
        </OverlayTrigger>
      ))
      /*const Followers = () => (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
          <Button variant="light" className = "text-center" >Followers</Button>
        </OverlayTrigger>
      );*/
    )
    
  }


}
  export default withRouter(Followers);