import React, {Component} from "react";

export default class Comment extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        if (this.props.hasComment) {
            const commentList = this.props.commentList;
            return (
                commentList.map((comment) => (
                        <span className="d-flex mb-2">
                    <strong className="mr-1">{comment.username}:</strong>{" "}
                            <strong className="text-dark">{comment.content}</strong>{" "}
                </span>)
                )
            );
        } else {
            return (
                <span className="d-flex mb-2">
                    <strong className="mr-1">{this.props.commentList}</strong>
                </span>
            );
        }
    }
}