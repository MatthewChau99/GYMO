import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Card, CardHeader, ListGroup, ListGroupItem, Progress} from "shards-react";
import store from "../../states/store";
import axios from "axios";
import Followers from "./Followers";
import Followings from "./Followings";
import {useLocation, withRouter} from "react-router-dom";



class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //user: store.getState().user,
            //user: "",
            users: [],
            userAvatar: require("../../cache/default.jpg"),
            userID: this.props.userID,
        };
        //this.getPic(this.state.user.pictureID);
        //this.getUser = this.getUser.bind(this);
        this.getUser(this.props.userID);
    }

    getPic(picID) {
        if (picID) {
            axios.get(`/pic/${picID}`, {
                params: {
                    picID: picID
                }
            }).then(async (response) => {
                this.setState({
                    userAvatar: `data:image/png;base64, ${response.data}`
                });
            }).catch(
                function (error) {
                    console.error(error);
                }
            );
        }
    }
    //componentWillMount(){
  //      this.getUser(this.props.userID);
//    }
/*
    async getUser(userID) {
        //let self = this
        let user_id = userID;
        axios.get(`/account/${user_id}`,
            {params: {userID: user_id}}
        ).then( async (response) => {
            console.log("FUCK");
            await self.setState({
                user: response.data["user"]
            }, () => {
                console.log("user:" + self.state.user);
            });
            console.log(response.data["user"])
            //console.log(self.state.user);
        }).catch(function (error) {
            console.log(error);
        })
    }*/

    async getUser(userID) {
        let user_id = userID;
        axios.get(`/account/${user_id}`,
            {params: {userID: user_id}}
        ).then(async (response) => {
            const user = response.data["user"];
            this.setState({
                users: this.state.users.concat(user)
            });
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        //const my_user = this.state.user;
        //console.log(this.state.user);
        //const my_user = this.getUser(this.state.userID);
        //console.log(my_user);
        //let i = 0;
        //if (i == 0){
        //    this.getUser(this.state.userID);
        //    i++;
        //}
        //const initial = this.state.user.name.charAt(0).toUpperCase();
        const {users} = this.state;
        //let img = ;
        return (
            users.map((user,idx) => (
                <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                        className="rounded-circle"
                        src={require("./../../images/avatars/" + user.name.charAt(0).toUpperCase() + ".png")}
                        alt={user.name}
                        width="110"
                        />
                    </div>
                    <h4 className="mb-0">{user.name}</h4>
                    <span
                        className="text-muted d-block mb-2"> <Followers userID={user._id}/> : {user.followers} | <Followings/> : {user.follows}</span>
                    <Button pill outline size="sm" className="mb-2">
                        <i className="material-icons mr-1">person_add</i> Follow
                    </Button>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-4">
                        <strong className="text-muted d-block mb-2">
                            Introduction
                        </strong>
                        <span>{user.intro}</span>
                    </ListGroupItem>
                </ListGroup>
            </Card>
            ))
            
        );
    }
}

UserDetails.propTypes = {
    /**
     * The user details object.
     */
    userDetails: PropTypes.object
};


UserDetails.defaultProps = {
    userDetails: {
        name: "Mat",
        avatar: require("./../../images/avatars/0.jpg"),
        jobTitle: "Product Owner",
        performanceReportTitle: "Workload",
        performanceReportValue: 74,
        metaTitle: "Description",
        metaValue:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    }
};

export default withRouter(UserDetails);
