import React, {Component} from "react";
import Comment from "./Comment";
import {withRouter} from "react-router-dom";
import {Card, CardBody, CardHeader, Form, FormInput, ListGroup, ListGroupItem} from "shards-react";
import store from "../../states/store";
import axios from "axios";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Comments",
            postID: this.props.location.state.postID,
            comment: "",
            user: store.getState().user
        };
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.user) {
            axios({
                method: 'post',
                url: `/posts/comment/${this.state.postID}`,
                data: {
                    postID: this.state.postID,
                    content: this.state.comment,
                    date: Date.now(),
                    userID: this.state.user._id
                }
            }).then((response) => {
                console.log(this.state.comment);
                this.props.history.push({
                    pathname: 'blog-posts',
                    state: this.state.postID
                })
            }).catch(function (error) {
                console.log(error)
            });
        } else {
            this.props.history.push("login");
        }

    }

    handleChange(event) {
        this.setState({
            comment: event.target.value
        })
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{this.state.title}</h6>
                </CardHeader>

                <CardBody className="p-0">
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <Comment postID={this.state.postID}/>
                            <Form onChange={(event) => this.handleChange(event)}
                                  onSubmit={(event) => this.handleSubmit(event)}>
                                <FormInput placeholder="Comment Something!">

                                </FormInput>
                            </Form>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
}

export default withRouter(Comments);
