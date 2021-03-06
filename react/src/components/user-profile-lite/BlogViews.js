import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";

import {Badge, Card, CardBody, Col} from "shards-react";

class BlogViews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: [],
            picFilePath: "",
            hasPic: 0,
            userID: this.props.location.state.userID,
        };
        this.getPostsByUser(this.state.userID);
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
                        backgroundImage: require("../../images/user-profile/" + Math.floor(Math.random() * 10) + ".jpg"),
                        categoryTheme: "dark",
                        author: post.userName,
                        postID: post.postID,
                        authorAvatar: require("../../images/avatars/1.jpg"),
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
                backgroundImage: require("../../images/user-profile/" + Math.floor(Math.random() * 10) + ".jpg"),
                categoryTheme: "dark",
                author: post.userName,
                postID: post.postID,
                authorAvatar: require("../../images/avatars/1.jpg"),
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
                PostsListOne: this.state.PostsListOne.concat(newPost)
            });
        }

    }

    async getPostsByUser(userID) {
        let user_id = userID;
        axios.get(`/posts/user/${user_id}`,
            {params: {userID: user_id}}
        ).then(async (response) => {
            const posts = response.data["posts"];
            for (let i = 0; i < posts.length; i++) {
                await this.getPic(posts[i]);
            }
        }).catch(function (error) {
            console.log(error);
        })
    }


    render() {
        const {PostsListOne} = this.state;
        return (
            PostsListOne.map((post, idx) => (
                <Col lg="12" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post card-post--aside card-post--1">
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
                            <span className="card-text d-inline-block mb-3">{post.body.length < 50 ? post.body : post.body.substring(0, 50) + "..."}</span>
                            <br/>
                            <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                </Col>


            ))

        );
    }

}

export default withRouter(BlogViews);

