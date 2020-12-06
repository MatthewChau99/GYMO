/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {Container, Row} from "shards-react";
import BlogPost from "../components/blog/BlogPost";
import {Link, withRouter} from "react-router-dom";
import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";
import axios from "axios";
import store from "../states/store";


import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PostList: [],
            FollowsPostList: [],
            picFilePath: "",
            hasPic: 0,
            filter: 0,
            //user: "user",
           // userID: this.props.location.state.userID,
        };
        this.getPosts();
        //this.getFollowsPosts();
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
                        backgroundImage: require(post.content.substring(10, post.content.length()-2)),
                        categoryTheme: "dark",
                        author: post.userName,
                        postID: post.postID,
                        authorAvatar: require("../images/avatars/" + post.userName[0].toUpperCase() + ".png"),
                        title: post.title,
                        body: post.content.replace(/<p>/g, "").replace(/<h1>/g, "").replace(/<h2>/g, "")
                            .replace(/<h3>/g, "").replace(/<u>/g, "").replace(/<ol>/g, "").replace(/<em>/g, "")
                            .replace(/<strong>/g, "").replace(/<i>/g, "").replace(/<\/p>/g, "\n").replace(/<\/h1>/g, '\n')
                            .replace(/<\/h2>/g, "\n").replace(/<\/h3>/g, "\n").replace(/<\/u>/g, "\n").replace(/<\/em>/g, "\n")
                            .replace(/<\/u>/g, "\n").replace(/<\/ol>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "\n")
                            .replace(/<blockquote>/g, "").replace(/<\/blockquote>/g, "").replace(/<s>/g, "").replace(/<\/s>/g, "")
                            .replace(/<li>/g, "").replace(/<\/li>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "")
                            .replace(/<li class="ql-indent-1">/g, "")
                            .replace(post.content.substring(post.content.indexOf('<img'),(post.content.indexOf('>',post.content.indexOf('<img')))+1), "[image]")
                            .replace(post.content.substring(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+1),
                                (post.content.indexOf('>',(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+2))))),"[image]"),
                        date: post.date,
                        userID: post.userID
                    };
                    this.setState({
                        PostList: this.state.PostList.concat(newPost)
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
                backgroundImage: require("../images/user-profile/" + Math.floor(Math.random() * 10) + ".jpg"),
                categoryTheme: "dark",
                author: post.userName,
                postID: post.postID,
                authorAvatar: require("../images/avatars/" + post.userName[0].toUpperCase() + ".png"),
                title: post.title,
                body: post.content.replace(/<p>/g, "").replace(/<h1>/g, "").replace(/<h2>/g, "")
                    .replace(/<h3>/g, "").replace(/<u>/g, "").replace(/<ol>/g, "").replace(/<em>/g, "")
                    .replace(/<strong>/g, "").replace(/<i>/g, "").replace(/<\/p>/g, "\n").replace(/<\/h1>/g, '\n')
                    .replace(/<\/h2>/g, "\n").replace(/<\/h3>/g, "\n").replace(/<\/u>/g, "\n").replace(/<\/em>/g, "\n")
                    .replace(/<\/u>/g, "\n").replace(/<\/ol>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "\n")
                    .replace(/<blockquote>/g, "").replace(/<\/blockquote>/g, "").replace(/<s>/g, "").replace(/<\/s>/g, "")
                    .replace(/<li>/g, "").replace(/<\/li>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "")
                    .replace(/<li class="ql-indent-1">/g, "")
                    .replace(post.content.substring(post.content.indexOf('<img'),(post.content.indexOf('>',post.content.indexOf('<img')))+1), "[image]")
                    .replace(post.content.substring(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+1),
                        (post.content.indexOf('>',(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+2))))),"[image]"),
                date: post.date,
                userID: post.userID
            };
            this.setState({
                PostList: this.state.PostList.concat(newPost)
            });
        }
    }

    async getPicFollows(post) {
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
                        backgroundImage: require(post.content.substring(10, post.content.length()-2)),
                        categoryTheme: "dark",
                        author: post.userName,
                        postID: post.postID,
                        authorAvatar: require("../images/avatars/" + post.userName[0].toUpperCase() + ".png"),
                        title: post.title,
                        body: post.content.replace(/<p>/g, "").replace(/<h1>/g, "").replace(/<h2>/g, "")
                            .replace(/<h3>/g, "").replace(/<u>/g, "").replace(/<ol>/g, "").replace(/<em>/g, "")
                            .replace(/<strong>/g, "").replace(/<i>/g, "").replace(/<\/p>/g, "\n").replace(/<\/h1>/g, '\n')
                            .replace(/<\/h2>/g, "\n").replace(/<\/h3>/g, "\n").replace(/<\/u>/g, "\n").replace(/<\/em>/g, "\n")
                            .replace(/<\/u>/g, "\n").replace(/<\/ol>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "\n")
                            .replace(/<blockquote>/g, "").replace(/<\/blockquote>/g, "").replace(/<s>/g, "").replace(/<\/s>/g, "")
                            .replace(/<li>/g, "").replace(/<\/li>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "")
                            .replace(/<li class="ql-indent-1">/g, "")
                            .replace(post.content.substring(post.content.indexOf('<img'),(post.content.indexOf('>',post.content.indexOf('<img')))+1), "[image]")
                            .replace(post.content.substring(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+1),
                                (post.content.indexOf('>',(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+2))))),"[image]"),
                        date: post.date,
                        userID: post.userID
                    };
                    this.setState({
                        FollowsPostList: this.state.FollowsPostList.concat(newPost)
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
                backgroundImage: require("../images/user-profile/" + Math.floor(Math.random() * 10) + ".jpg"),
                categoryTheme: "dark",
                author: post.userName,
                postID: post.postID,
                authorAvatar: require("../images/avatars/" + post.userName[0].toUpperCase() + ".png"),
                title: post.title,
                body: post.content.replace(/<p>/g, "").replace(/<h1>/g, "").replace(/<h2>/g, "")
                    .replace(/<h3>/g, "").replace(/<u>/g, "").replace(/<ol>/g, "").replace(/<em>/g, "")
                    .replace(/<strong>/g, "").replace(/<i>/g, "").replace(/<\/p>/g, "\n").replace(/<\/h1>/g, '\n')
                    .replace(/<\/h2>/g, "\n").replace(/<\/h3>/g, "\n").replace(/<\/u>/g, "\n").replace(/<\/em>/g, "\n")
                    .replace(/<\/u>/g, "\n").replace(/<\/ol>/g, "").replace(/<\/strong>/g, "").replace(/<br>/g, "\n")
                    .replace(/<blockquote>/g, "").replace(/<\/blockquote>/g, "").replace(/<s>/g, "").replace(/<\/s>/g, "")
                    .replace(/<li>/g, "").replace(/<\/li>/g, "").replace(/<ul>/g, "").replace(/<\/ul>/g, "")
                    .replace(/<li class="ql-indent-1">/g, "")
                    .replace(post.content.substring(post.content.indexOf('<img'),(post.content.indexOf('>',post.content.indexOf('<img')))+1), "[image]")
                    .replace(post.content.substring(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+1),
                        (post.content.indexOf('>',(post.content.indexOf('<img',(post.content.indexOf('>',post.content.indexOf('<img')))+2))))),"[image]"),
                date: post.date,
                userID: post.userID
            };
            this.setState({
                FollowsPostList: this.state.FollowsPostList.concat(newPost)
            });
        }
    }

    async getPosts() {
        let self = this;
            axios.get('/posts/getAllPosts',
                {params: {limit: 12}}
            ).then(async (response) => {
                const posts = response.data["posts"];
                for (let i = 0; i < posts.length; i++) {
                    await self.getPic(posts[i]);
                }
                console.log(this.state.PostList);
            }).catch(function (error) {
                console.log(error)
            })
        
    }
    async getFollowsPosts() {
        
        let self = this;
            if (store.getState().loginStatus) {
                const loginUserID = store.getState().user._id;
                let user_id = loginUserID;
                axios.get(`/posts/getPostsFromFollows/${user_id}`,
                    {params: {userID: user_id}}
                ).then(async (response) => {
                    const posts = response.data["posts"];
                    if (posts.length===0)
                        self.setState({FollowsPostList:[]});
                    for (let i = 0; i < posts.length; i++) {
                        console.log(posts.postID);
                        await self.getPicFollows(posts[i]);
                    }
                    self.setState({
                        filter : 1,
                        PostList:[],
                    });
                    console.log(this.state.filter);
                    console.log(this.state.FollowsPostList);
                }).catch(function (error) {
                    console.log(error);
                })
            } else {
                console.log("error");
            }
        
    }

    async getPostsAndUpdate(){
        let self = this;
        self.getPosts();
        self.setState({
            filter : 0,
            FollowsPostList:[],
        });
    }

    render() {
        console.log(this.state.filter);
        if (this.state.filter === 0){
            return (
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                        <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left"/>
                        <Button outline
                            theme="dark"
                            size="small"
                            className="float-right mt-3"
                            onClick={this.getFollowsPosts.bind(this)}
                            style={{ marginLeft: "auto" }}
                            >
                            Posts From Followings   
                        </Button>
                    </Row>
                    {/* First Row of Posts */}
                    <Row>
                    <BlogPost PostList={this.state.PostList}/>
                    </Row>
                </Container>
            );
        }
        else{
            return (
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                        <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left"/>
                        <Button outline
                            theme="dark"
                            size="small"
                            className="float-right mt-3"
                            onClick={this.getPostsAndUpdate.bind(this)}
                            style={{ marginLeft: "auto" }}
                            >
                            All Posts   
                        </Button>
                    </Row>
                    {/* First Row of Posts */}
                    <Row>
                    <BlogPost PostList={this.state.FollowsPostList}/>
                    </Row>
                </Container>
            );
        }
    }
}

export default BlogPosts;
