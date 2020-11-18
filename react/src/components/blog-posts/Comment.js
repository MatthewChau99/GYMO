import React, {Component} from "react";
import axios from "axios";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            postID: "5fb51b91c037122b997b7269"
        };
        this.getComments();
    }

    async getComments() {
        axios.get(`/posts/comment/${this.state.postID}`, {params: {postID: this.state.postID}})
            .then(async (response) => {
                const comments = response.data["comments"];
                console.log(response.data);
                this.setState({
                    commentList: comments
                });
            }).catch(function (error) {
            console.log(error)
        })
    }

    render() {
        const {commentList} = this.state;
        return (
            commentList.map((comment) => (
                <span className="d-flex mb-2">
                    <strong className="mr-1">{comment.username}:</strong>{" "}
                            <strong className="text-dark">{comment.content}!</strong>{" "}
                </span>)
            )
        );

    }
}