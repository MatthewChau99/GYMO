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
            backgroundImage: require("../../images/user-profile/" + Math.floor(Math.random() * 10) + ".jpg")
        };
    }

    render() {
        const {PostsListOne} = this.state;
        return (
            PostsListOne.map((post) => (
                <Col lg="9" md="12">
                    <TextBody
                        backgroundImage={this.state.backgroundImage}
                        badge="sharing"
                        title={post.title}
                        text={post.body}
                        days={post.date}
                        lnum={this.props.likesNum}
                        cnum={this.props.commentsNum}
                        addLike={this.props.addLike}
                    />
                </Col>
            ))
        );
    }
}

export default withRouter(BlogDetail);