import React, {Component} from "react";
import axios from "axios";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList: [],
            postID: this.props.postID
        };
        this.getComments();
    }

    async getPost(postID) {
        let self = this;
        let post_id = postID;
        axios.get(`/posts/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            const posts = response.data["posts"];
            self.setState({
                commentList: posts.comments
            })
        }).catch(function (error) {
            console.log(error);
        })
    }

    async getComments() {
        console.log(this.state.postID);
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
        const commentList = this.state.commentList;
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