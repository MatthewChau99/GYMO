import React, {Component} from "react";
import {Badge, Card, CardBody, Col} from "shards-react";
import axios from "axios";

export default class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: []
        };
        this.getPosts(4);
    }

    getPosts(limit) {
        axios.get('/posts/getAllPosts',
            {params: {limit: 4}}
        ).then((response) => {
            const posts = response.data["posts"];
            console.log(posts.length);
            for (let i = 0; i < posts.length; i++) {
                const post = {
                    backgroundImage: require("../../images/content-management/1.jpeg"),
                    categoryTheme: "dark",
                    author: posts[i].userName,
                    authorAvatar: require("../../images/avatars/1.jpg"),
                    title: posts[i].title,
                    body: posts[i].content,
                    date: posts[i].date
                };
                this.setState({
                    PostsListOne: this.state.PostsListOne.concat(post)
                });
            }
        }).catch(function (error) {
            console.log(error)
        })

    }

    render() {
        const {PostsListOne} = this.state;
        return (
            PostsListOne.map((post, idx) => (
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
                            <div className="card-post__author d-flex">
                                <a
                                    href="#"
                                    className="card-post__author-avatar card-post__author-avatar--small"
                                    style={{backgroundImage: `url('${post.authorAvatar}')`}}
                                >
                                    Written by {post.author}
                                </a>
                            </div>
                        </div>
                        <CardBody>
                            <h5 className="card-title">
                                <a href="#" className="text-fiord-blue">
                                    {post.title}
                                </a>
                            </h5>
                            <span className="card-text d-inline-block mb-3">{post.body}</span>
                            <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                </Col>
            ))
        );
    }
};