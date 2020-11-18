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
        let img;
        if (this.state.user.name.charAt(0) === "A") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/A.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "B") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/B.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "C") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/C.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "D") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/D.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "E") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/E.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "F") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/F.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "G") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/G.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "H") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/H.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "I") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/I.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "J") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/J.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "K") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/K.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "L") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/L.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "M") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/M.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "N") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/N.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "O") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/O.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "P") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/P.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "Q") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/Q.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "R") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/R.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "S") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/S.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "T") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/T.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "U") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/U.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "V") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/V.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "W") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/W.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "X") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/X.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "Y") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/Y.png")}
                alt={this.state.user.name}
                width="110"
            />
        } else if (this.state.user.name.charAt(0) === "Z") {
            img = <img
                className="rounded-circle"
                src={require("./../../images/avatars/Z.png")}
                alt={this.state.user.name}
                width="110"
            />
        }
        return (
            <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        {/*<img*/}
                        {/*    className="rounded-circle"*/}
                        {/*    src={this.state.userAvatar}*/}
                        {/*    alt={this.state.user.name}*/}
                        {/*    width="110"*/}
                        {/*/>*/}
                        {img}
                    </div>
                    <h4 className="mb-0">{this.state.user.name}</h4>
                    <span
                        className="text-muted d-block mb-2"> <Followers/> : {this.state.user.followers} | <Followings/> : {this.state.user.follows}</span>
                    <Button pill outline size="sm" className="mb-2">
                        <i className="material-icons mr-1">person_add</i> Follow
                    </Button>
                </CardHeader>
                <ListGroup flush>
                    {/*        <ListGroupItem className="px-4">*/}
                    {/*            <div className="progress-wrapper">*/}
                    {/*                <strong className="text-muted d-block mb-2">*/}
                    {/*                    {this.state.user.performanceReportTitle}*/}
                    {/*                </strong>*/}
                    {/*                <Progress*/}
                    {/*                    className="progress-sm"*/}
                    {/*                    value={this.state.user.performanceReportValue}*/}
                    {/*                >*/}
                    {/*<span className="progress-value">*/}
                    {/*  {this.state.user.performanceReportValue}%*/}
                    {/*</span>*/}
                    {/*                </Progress>*/}
                    {/*            </div>*/}
                    {/*        </ListGroupItem>*/}
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
