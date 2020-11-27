
import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
import {Button, Card, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import axios from "axios";
import Followers from "./Followers";
import Followings from "./Followings";
import store from "../../states/store";


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "user",
            userAvatar: require("../../cache/default.jpg"),
            userID: this.props.location.state.userID,      // This page's user ID, not the current login user ID
            follow: 0
        };
        this.getUser.bind(this);
        this.getUser(this.props.location.state.userID);
        console.log(this.props.location.state.userID);
        this.checkFollowState();
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
        axios.get(`/account/user/${user_id}`,
            {params: {userID: user_id}}
        ).then( async (response) => {
            self.setState({
                user: response.data["user"]
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
                self.setState({
                    follow: 1
                });
                console.log(this.state.follow);
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
                self.setState({
                    follow: 0
                });
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
        }
    }


    render() {
        console.log(this.state.follow);
        console.log(this.state.user);
        let initial = 'A';
        if (this.state.user.name) {
            initial = this.state.user.name[0].toUpperCase();
        }
        // const initial = this.state.user ? this.state.user.name.toUpperCase() : 'A';

        let img = <img
            className="rounded-circle"
            src={require("./../../images/avatars/" + initial + ".png")}
            alt={this.state.user.name}
            width="110"
        />;

        if (this.state.follow == 0){
            return (

                <Card small className="mb-4 pt-3">
                    <CardHeader className="border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            {img}
                        </div>
                        <h4 className="mb-0">{this.state.user.name}</h4>
                        <span
                            className="text-muted d-block mb-2"> <Followers userID={this.state.userID} />| <Followings userID={this.state.userID}/></span>
                        <Button pill outline size="sm" className="mb-2" onClick={this.state.follow == 0 ? this.follow.bind(this) : this.unfollow.bind(this)}>
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
        else {
            return (
                <Card small className="mb-4 pt-3">
                    <CardHeader className="border-bottom text-center">
                        <div className="mb-3 mx-auto">
                            {img}
                        </div>
                        <h4 className="mb-0">{this.state.user.name}</h4>
                        <span
                            className="text-muted d-block mb-2"> <Followers userID={this.state.userID} />| <Followings userID={this.state.userID}/></span>
                        <Button pill outline size="sm" className="mb-2" onClick={this.state.follow == 0 ? this.follow.bind(this) : this.unfollow.bind(this)}>
                            <i className="material-icons mr-1" >person_add</i> Unfollow
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