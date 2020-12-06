/* eslint jsx-a11y/anchor-is-valid: 0 */
import {Link, withRouter} from "react-router-dom";

import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import axios from "axios";
import store from "../../states/store";

class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: this.props.location.state.postID,
            title: "Author",
            author: "author",
            page: "",
            tpost: 2,
            datestarted: "Sep 2020",
            userID: "",
            follow: 0
        };
        this.checkFollowState(this.state.postID);
        this.getAuthor.bind(this);
        this.getAuthor(this.state.postID);
        this.getPostCount(this.state.postID);

        //console.log(this.props.location.state.userID);
        //this.getPage();
        //this.getTPost();
        //this.getDateStarted();
    }

    async getAuthor(postID) {
        let self = this;
        let post_id = postID;
        axios.get(`/posts/getUserByPost/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            const user = response.data["user"];
            self.setState({
                author: user.name,
                userID: user._id,
                datestarted: user.createdAt
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    async getPostCount(postID) {
        let self = this;
        let post_id = postID;
        axios.get(`/posts/getPostCount/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            const postCount = response.data["postCount"];
            self.setState({tpost: postCount});
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
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert("You need to login first.");
            // return (<AuthError/>);
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
                console.log(this.state.follow);
                console.log(response.data.message);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            alert("You need to login first.");
        }
    }

    async checkFollowState(postID) {
        if (store.getState().loginStatus) {
            const loginUserID = store.getState().user._id;
            const self = this;
            axios.get(`/posts/checkFollowState/${loginUserID}/${postID}`,
                {
                    params: {
                        userID: loginUserID,
                        postID: postID
                    }
                }
            ).then(async (response) => {
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
      if (store.getState().loginStatus && this.state.userID === store.getState().user._id) {
        return (
          <Card small className="mb-3">
              <CardHeader className="border-bottom">
                  <h6 className="m-0">{this.state.title}</h6>
              </CardHeader>

              <CardBody className="p-0">
                  <ListGroup flush>
                      <ListGroupItem className="p-3">
                          <span className="d-flex mb-2">
                              <div className="card-post__author d-flex">
                                  <a
                                      href="#"
                                      className="card-post__author-avatar card-post__author-avatar--small"
                                      style={{backgroundImage: `url(${require("../../images/avatars/" + this.state.author[0].toUpperCase() + ".png")})`}}
                                  >
                                    Written by {this.state.author}
                                  </a>
                              </div>
                          </span>

                          <span className="d-flex mb-2">
                              <i className="material-icons mr-1">face</i>
                              <strong className="mr-1">User Name:</strong>{" "}
                              <strong className="text-dark">{this.state.author}</strong>{" "}
                          </span>

                          <span className="d-flex mb-2">
                              <i className="material-icons mr-1">insert_invitation</i>
                              <strong className="mr-1">Date Started:</strong>{" "}
                              <strong
                                  className="text-warning">{this.state.datestarted.substring(0, 10)}</strong>{" "}
                          </span>

                          <span className="d-flex mb-2">
                              <i className="material-icons mr-1">bookmark</i>
                              <strong className="mr-1">Total Posts:</strong>{" "}
                              <strong className="text-light">{this.state.tpost}</strong>
                          </span>

                          <span className="d-flex mb-2">
                              <i className="material-icons mr-1 mt-2">forward</i>
                              <strong className="mr-2 mt-2">Main Page:</strong>{" "}
                              {/*<a className="ml-auto" href={this.state.page}>Enter</a>*/}

                              <Button outline pill theme = "light" tag={Link} to={{
                                  pathname: 'user-profile-lite',
                                  search: `?userID=${this.state.userID}`,
                                  state: {userID: this.state.userID}
                              }}>
                                  Enter
                              </Button>
                          </span>
                      </ListGroupItem>
                  </ListGroup>
              </CardBody>
          </Card>
      );
      }
      else if (this.state.follow === 0) {
            return (
                <Card small className="mb-3">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">{this.state.title}</h6>
                    </CardHeader>

                    <CardBody className="p-0">
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <span className="d-flex mb-2">
                                    <div className="card-post__author d-flex">
                                        <a
                                            href="#"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{backgroundImage: `url(${require("../../images/avatars/" + this.state.author[0].toUpperCase() + ".png")})`}}
                                        >
                                          Written by {this.state.author}
                                        </a>
                                    </div>
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">face</i>
                                    <strong className="mr-1">User Name:</strong>{" "}
                                    <strong className="text-dark">{this.state.author}</strong>{" "}
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">insert_invitation</i>
                                    <strong className="mr-1">Date Started:</strong>{" "}
                                    <strong
                                        className="text-warning">{this.state.datestarted.substring(0, 10)}</strong>{" "}
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">bookmark</i>
                                    <strong className="mr-1">Total Posts:</strong>{" "}
                                    <strong className="text-light">{this.state.tpost}</strong>
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1 mt-2">forward</i>
                                    <strong className="mr-2 mt-2">Main Page:</strong>{" "}
                                    {/*<a className="ml-auto" href={this.state.page}>Enter</a>*/}

                                    <Button outline pill theme = "light" tag={Link} to={{
                                        pathname: 'user-profile-lite',
                                        search: `?userID=${this.state.userID}`,
                                        state: {userID: this.state.userID}
                                    }}>
                                        Enter
                                    </Button>
                                </span>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex px-3 border-0">
                                <Button block theme="accent" size="md" className="ml-auto"
                                        onClick={this.state.follow === 0 ? this.follow.bind(this) : this.unfollow.bind(this)}>
                                    <i className="material-icons">add</i> Follow
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            );
        } else {
            return (
                <Card small className="mb-3">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">{this.state.title}</h6>
                    </CardHeader>

                    <CardBody className="p-0">
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <span className="d-flex mb-2">
                                    <div className="card-post__author d-flex">
                                        <a
                                            href="#"
                                            className="card-post__author-avatar card-post__author-avatar--small"
                                            style={{backgroundImage: `url(${require("../../images/avatars/" + this.state.author[0].toUpperCase() + ".png")})`}}
                                        >
                                        Written by {this.state.author}
                                        </a>
                                    </div>
                                </span>
                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">face</i>
                                    <strong className="mr-1">User Name:</strong>{" "}
                                    <strong className="text-dark">{this.state.author}</strong>{" "}
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">insert_invitation</i>
                                    <strong className="mr-1">Date Started:</strong>{" "}
                                    <strong className="text-warning">{this.state.datestarted.substring(0, 10)}</strong>{" "}
                                </span>

                                <span className="d-flex mb-2">
                                    <i className="material-icons mr-1">bookmark</i>
                                    <strong className="mr-1">Total Posts:</strong>{" "}
                                    <strong className="text-light">{this.state.tpost}</strong>
                                </span>
                                <span className="d-flex">
                                    <i className="material-icons mr-1 mt-2">forward</i>
                                    <strong className="mr-2 mt-2">Main Page:</strong>{" "}
                                    <Button outline pill theme="light" tag={Link} to={{
                                        pathname: 'user-profile-lite',
                                        search: `?userID=${this.state.userID}`,
                                        state: {userID: this.state.userID}
                                    }}>
                                        Enter
                                    </Button>
                                </span>
                            </ListGroupItem>
                            <ListGroupItem className="d-flex px-3 border-0">
                                <Button block theme="accent" size="md" className="ml-auto"
                                        onClick={this.state.follow === 0 ? this.follow.bind(this) : this.unfollow.bind(this)}>
                                    <i className="material-icons">remove</i> Unfollow
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            );
        }

    }
}

export default withRouter(Author);
