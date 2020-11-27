import React, {Component} from "react";
import Comment from "./Comment";
import {withRouter} from "react-router-dom";
import {Card, CardBody, CardHeader, Form, FormInput, ListGroup, ListGroupItem} from "shards-react";
import BlogDetail from "../blog/BlogDetail";
import store from "../../states/store";
import axios from "axios";


class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Comments",
            postID: this.props.location.state.postID,
            commentList: this.props.commentList,
            user: store.getState().user,
            hasComment: this.props.hasComment,
        };

        // this.props.getComments();
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
                            <Comment postID={this.state.postID} commentList={this.props.commentList} hasComment={this.props.hasComment}/>
                            <Form onChange={(event) => this.props.changeComment(event)}
                                  onSubmit={(event) => this.props.addComment(event)}>
                                <FormInput placeholder="Comment something and press enter!">
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
