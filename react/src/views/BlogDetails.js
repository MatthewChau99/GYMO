import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import {Link} from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import Author from "../components/blog-posts/Author";
import Details from "../components/blog-posts/Details";
import Comments from "../components/blog-posts/Comments";
import BlogDetail from "../components/blog/BlogDetail";
import {Form} from "react-advanced-form";
import axios from "axios";
import store from "../states/store";

class BlogDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: [],
            picFilePath: "",
            hasPic: 0,
            postID: this.props.location.state.postID,
            likesNum: 0,
            commentsNum: 0,
            commentContent: "",
            user: store.getState().user,
            commentList: "No comments",
            hasComments: 0,
            hasGotComments: 0,
        };

        this.addLike = this.addLike.bind(this);
    }

    componentWillMount() {
        this.getComments();
        this.getPosts(this.state.postID);
    }

    addLike() {
        const self = this;
        if (store.getState().loginStatus) {
            axios({
                method: 'post',
                url: '/posts/addLike',
                data: {
                    postID: this.state.postID,
                    userID: store.getState().user._id
                }
            }).then(() => {
                self.props.history.push({
                    pathname: 'blog-details',
                    state: this.state.postID,
                });
                self.getPosts(this.state.postID);
                self.setState({
                    likesNum: self.state.likesNum + 1
                });
                console.log("added like");
            }).catch(function (error) {
                console.log(error);
            })
        } else {
            alert("You need to login first");
        }

    }

    addComment(event) {
        event.preventDefault();
        const self = this;
        if (this.state.user) {
            axios({
                method: 'post',
                url: `/posts/comment/${self.state.postID}`,
                data: {
                    postID: self.state.postID,
                    content: self.state.commentContent,
                    date: Date.now(),
                    userID: self.state.user._id
                }
            }).then(() => {
                self.props.history.push({
                    pathname: 'blog-details',
                    state: this.state.postID,
                });
                self.getComments();
                self.setState({
                    commentsNum: self.state.commentsNum + 1,
                    commentContent: ""
                });
                Array.from(document.querySelectorAll("input")).forEach(
                    input => (input.value = "")
                  );
                self.form.reset();
            }).catch(function (error) {
                console.log(error)
            });
        } else {
            self.props.history.push("login");
        }
    }


    getComments() {
        const self = this;
        axios.get(`/posts/comment/${self.state.postID}`, {params: {postID: self.state.postID}})
            .then(async (response) => {
                const comments = response.data["comments"];
                self.setState({
                    hasGotComments: 1
                });
                if (comments.length !== 0) {
                    self.setState({
                        commentList: comments,
                        hasComment: 1
                    });
                }
            }).catch(function (error) {
            console.log(error)
        });
    }

    changeComment(event) {
        this.setState({
            commentContent: event.target.value
        });
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
                        postID: post._id,
                        author: post.userName,
                        authorAvatar: require("../images/avatars/1.jpg"),
                        title: post.title,
                        body: post.content,
                        date: post.date,
                        likesNum: post.likesNum,
                        commentsNum: post.comments.length
                    };
                    this.setState({
                        PostsListOne: this.state.PostsListOne.concat(newPost),
                        likesNum: newPost.likesNum,
                        commentsNum: newPost.commentsNum
                    });
                }).catch(
                function (error) {
                    console.error(error);
                }
            );
        } else {
            this.setState({
                picFilePath: require("../cache/default.jpg")
            });
            const newPost = {
                backgroundImage: `url(${this.state.picFilePath})`,
                categoryTheme: "dark",
                author: post.userName,
                postID: post._id,
                authorAvatar: require("../images/avatars/1.jpg"),
                title: post.title,
                body: post.content,
                date: post.date,
                likesNum: post.likesNum,
                commentsNum: post.comments.length
            };
            this.setState({
                PostsListOne: this.state.PostsListOne.concat(newPost),
                likesNum: newPost.likesNum,
                commentsNum: newPost.commentsNum
            });
        }
    }

    getPosts(postID) {
        let post_id = postID;
        const self = this;
        axios.get(`/posts/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            const posts = response.data["posts"];
            for (let i = 0; i < posts.length; i++) {
                await self.getPic(posts[i]);
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        //console.log("comment: " + this.state.commentContent);
        if (this.state.PostsListOne.length > 0 && this.state.hasGotComments === 1) {
            return (
                <Container fluid className="main-content-container px-4 pb-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                        <PageTitle
                            sm="4" title="Blog Detail"
                            subtitle="Blog Posts"
                            className="text-sm-left"
                            tag={Link} to="blog-posts"
                        />
                    </Row>

                    <Row>
                        <BlogDetail PostList={this.state.PostsListOne} likesNum={this.state.likesNum}
                                    commentsNum={this.state.commentsNum} addLike={this.addLike.bind(this)}/>

                        {/* Sidebar Widgets */}
                        <Col lg="3" md="12">
                            <Author/>
                            <Details/>
                            <Comments addComment={this.addComment.bind(this)}
                                      changeComment={this.changeComment.bind(this)}
                                      getComments={this.getComments.bind(this)} commentList={this.state.commentList}
                                      hasComment={this.state.hasComment} currentText={this.state.commentContent}/>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return null;
        }
    }
}

export default BlogDetails;
