import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Card, CardHeader, ListGroup, ListGroupItem, Progress} from "shards-react";
import store from "../../states/store";
import axios from "axios";
import Followers from "./Followers";
import Followings from "./Followings";


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: store.getState().user,
            userAvatar: require("../../cache/default.jpg")
        };
        this.getPic(this.state.user.pictureID);
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

    render() {
        return (
            <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                            className="rounded-circle"
                            src={this.state.userAvatar}
                            alt={this.state.user.name}
                            width="110"
                        />
                    </div>
                    <h4 className="mb-0">{this.state.user.name}</h4>
                    <span
                        className="text-muted d-block mb-2"> <Followers/> : {this.state.user.followers} | <Followings/> : {this.state.user.follows}</span>
                    <Button pill outline size="sm" className="mb-2">
                        <i className="material-icons mr-1">person_add</i> Follow
                    </Button>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="px-4">
                        <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">
                                {this.state.user.performanceReportTitle}
                            </strong>
                            <Progress
                                className="progress-sm"
                                value={this.state.user.performanceReportValue}
                            >
            <span className="progress-value">
              {this.state.user.performanceReportValue}%
            </span>
                            </Progress>
                        </div>
                    </ListGroupItem>
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
