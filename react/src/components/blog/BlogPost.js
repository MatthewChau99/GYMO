import React, {Component} from "react";
import {Badge, Card, CardBody, Col} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {Link, withRouter} from "react-router-dom";

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: [],
            picFilePath: "",
            hasPic: 0,
        };
        this.getPosts(12);

    }

    async getPic(post) {
        if (post.pictureID) {
            axios.get(`/pic/${post.pictureID}`, {
                params: {
                    picID: post.pictureID
                }
            }).then(
                async (response) => {
                    this.setState({
                        picFilePath: response.data
                    });
                    const newPost = {
                        backgroundImage: `url("data:image/png;base64, ${this.state.picFilePath}")`,
                        categoryTheme: "dark",
                        author: post.userName,
                        postID: post.postID,
                        authorAvatar: require("../../images/avatars/1.jpg"),
                        title: post.title,
                        body: post.content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                        date: post.date,
                        userID: post.userID
                    };
                    this.setState({
                        PostsListOne: this.state.PostsListOne.concat(newPost)
                    });

                }).catch(
                function (error) {
                    console.error(error);
                }
            );
        } else {
            this.setState({
                picFilePath: require("../../cache/default.jpg")
            });
            const newPost = {
                backgroundImage: `url(${this.state.picFilePath})`,
                categoryTheme: "dark",
                author: post.userName,
                postID: post.postID,
                authorAvatar: require("../../images/avatars/1.jpg"),
                title: post.title,
                body: post.content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                date: post.date,
                userID: post.userID
            };
            this.setState({
                PostsListOne: this.state.PostsListOne.concat(newPost)
            });
        }

    }

    async getPosts(limit) {
        axios.get('/posts/getAllPosts',
            {params: {limit: 12}}
        ).then(async (response) => {
            const posts = response.data["posts"];
            for (let i = 0; i < posts.length; i++) {
                console.log(posts[i]);
                await this.getPic(posts[i]);
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
                            style={{backgroundImage: `${post.backgroundImage}`}}
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
                            <span className="card-text d-inline-block mb-3">{post.body}</span>
                            <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                </Col>


            ))

        );
    }
}

export default withRouter(BlogPost);
