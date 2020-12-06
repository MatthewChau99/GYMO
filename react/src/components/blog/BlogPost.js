import React, {Component} from "react";
import {Badge, Card, CardBody, CardHeader, Col} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {Link, withRouter} from "react-router-dom";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //PostList: this.props.PostList,
            picFilePath: "",
            hasPic: 0,
            filter: 0,
            FollowsPostList: [],
        };
        //this.getPosts(12);
        //this.getFollowsPosts(12);
    }

    render() {
        const PostList = this.props.PostList;

        //const {PostList} = this.state;
        console.log(PostList);
        return (
            PostList.map((post, idx) => (
                <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post card-post--1">
                        <div
                            className="card-post__image"
                            style={{backgroundImage: `url(${post.backgroundImage})`}}
                        >
                            <Badge
                                pill
                                className={`card-post__category bg-${post.categoryTheme}`}
                            >
                                {post.category}
                            </Badge>
                            <CardBody tag={Link} to={{
                                pathname: 'user-profile-lite',
                                search: `?userID=${post.userID}`,
                                state: {userID: post.userID}
                            }}>
                                <div className="card-post__author d-flex">
                                    <a
                                        href="#"
                                        className="card-post__author-avatar card-post__author-avatar--small"
                                        style={{backgroundImage: `url('${post.authorAvatar}')`}}
                                    >
                                        Written by {post.author}
                                    </a>
                                </div>
                            </CardBody>
                        </div>
                        <CardBody tag={Link} to={{
                            pathname: 'blog-details',
                            search: `?postID=${post.postID}`,
                            state: {postID: post.postID}
                        }}>
                            <h5 className="card-title">
                                <a href="#" className="text-fiord-blue">
                                    {post.title}
                                </a>
                            </h5>
                            <span className="card-text d-inline-block mb-3">
                                {post.body.length < 100 ? post.body : post.body.substring(0, 100) + "..."}
                                {/*<div dangerouslySetInnerHTML={{ __html: post.body }}/>*/}
                            </span>
                            <br/>
                            <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                </Col>
            ))
        );
    }
}

export default withRouter(BlogPost);
