import React, {Component} from "react";
import {Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postID: this.props.location.state.postID,
            dateCreated: ""
        };
        this.getDate(this.state.postID);
    }

    getDate(postID) {
        let self = this;
        let post_id = postID;
        axios.get(`/posts/getPostDate/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            self.setState({
                dateCreated: response.data["postDate"]
            });
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{"Other Details"}</h6>
                </CardHeader>
                <CardBody className="p-0">
                    <ListGroup flush>
                        <ListGroupItem className="p-3">
                            <span className="d-flex mb-2">
                                <i className="material-icons mr-1">event_available</i>
                                <strong className="mr-1">Date Posted:</strong>{" "}<strong
                                className="text-success">{this.state.dateCreated.substring(0, 10)}</strong>{" "}
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        )
    }

}

export default withRouter(Details);
