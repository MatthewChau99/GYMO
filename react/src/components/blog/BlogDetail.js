import React, {Component} from "react";
import {Col} from "shards-react";
import {withRouter} from "react-router-dom";
import TextBody from "../blog-posts/TextBody";


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
            PostsListOne.map((post, idx) => (
                <Col lg="9" md="12">
                    <TextBody
                        backgroundImage = "https://mdbootstrap.com/img/Others/documentation/1.jpg"
                        badge = "sharing"
                        title = {post.title}
                        text = {post.body}
                        days = {post.date}
                        lnum = {this.props.likesNum}
                        cnum = {this.props.commentsNum}
                        addLike={this.props.addLike}
                    />
                </Col>
            ))
        );
    }
}

export default withRouter(BlogDetail);