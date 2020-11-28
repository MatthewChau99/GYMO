import React, {Component} from "react";
import {Col} from "shards-react";
import {withRouter} from "react-router-dom";
import TextBody from "../blog-posts/TextBody";
import LikesAndComments from "../blog-posts/LikesAndcomments";


class BlogDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: this.props.PostList,
            postID: this.props.location.state.postID,
        };
    }

    render() {
        const {PostsListOne} = this.state;
        return (
            PostsListOne.map((post) => (
                <TextBody
                    backgroundImage="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                    badge="sharing"
                    title={post.title}
                    text={post.body}
                    days={post.date}
                    lnum={this.props.likesNum}
                    cnum={this.props.commentsNum}
                    addLike={this.props.addLike}
                />
            ))
        );
    }
}

export default withRouter(BlogDetail);