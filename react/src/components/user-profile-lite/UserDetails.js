import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Card, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import axios from "axios";
import Followers from "./Followers";
import Followings from "./Followings";
import store from "../../states/store";


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //user: store.getState().user,
            user: "user",
            userAvatar: require("../../cache/default.jpg"),
            userID: this.props.userID,      // This page's user ID, not the current login user ID
            follow: 0
        };

        this.getUser(this.props.userID);
        console.log(this.state.user);
    }

    componentWillMount(){
        console.log(this.state.userID);
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

    getUser(userID) {
        let self = this;
        let user_id = userID;
        axios.get(`/account/${user_id}`,
            {params: {userID: user_id}}
        ).then( async (response) => {
            await self.setState({
                user: response.data["user"]
            }, () => {
                console.log("user:" + response.data['user']);
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    follow() {
        if (store.getState().loginStatus) {
            const loginUserID = store.getState().user._id;
            const self = this;
            axios({
                method: 'post',
                url: `/account/addFollower`,
                data: {
                    userID: loginUserID,
                    followID: self.state.userID
                }
            }).then((response) => {
                console.log(response.data.message);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert("You need to login first.");
        }
    }

    unfollow() {
        if (store.getState().loginStatus) {
            const loginUserID = store.getState().user._id;
            const self = this;
            axios({
                method: 'delete',
                url: `/account/deleteFollower`,
                data: {
                    userID: loginUserID,
                    followID: self.state.userID
                }
            }).then((response) => {
                console.log(response.data.message);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert("You need to login first.");
        }
    }

    checkFollowState() {
        if (store.getState().loginStatus) {
            const loginUserID = store.getState().user._id;
            const self = this;
            axios.get(`/account/checkFollowState/${loginUserID}/${self.state.userID}`,
                {
                    params: {
                        userID: loginUserID,
                        followID: self.state.userID
                    }
                }
            ).then( async (response) => {
                if (response.data.follow === 1) {
                    self.setState({
                        follow: 1
                    });
                    console.log("is following");
                }
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            alert("You need to login first.");
        }
    }

    render() {
        // const initial = this.state.user;
        let img = <img
            className="rounded-circle"
            src={require("./../../images/avatars/M.png")}
            alt={this.state.user.name}
            width="110"
        />;

        return (
            <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        {img}
                    </div>
                    <h4 className="mb-0">{this.state.user.name}</h4>
                    <span
                        className="text-muted d-block mb-2"> <Followers/> : {this.state.user.followers} | <Followings/> : {this.state.user.follows}</span>
                    <Button pill outline size="sm" className="mb-2" onClick={this.checkFollowState.bind(this)}>
                        <i className="material-icons mr-1" >person_add</i> Follow
                    </Button>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-4">
                        <strong className="text-muted d-block mb-2">
                            Introduction
                        </strong>
                        <span>{this.state.user.intro}</span>
                    </ListGroupItem>
                </ListGroup>
            </Card>
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

export default UserDetails;
