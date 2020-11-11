import React, {Component} from "react";
import {Badge, Card, CardBody, Col} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {useLocation, withRouter} from "react-router-dom";
import TextBody from "../blog-posts/TextBody";


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostsListOne: [],
            picFilePath: "",
            hasPic: 0,
            //userID: this.props.location.state.userID
            postID: this.props.location.state.postID
        };
        this.getPostsByUser(this.state.postID);
        //this.getUserProfile(this.state.userID);
        this.addLike = this.addLike.bind(this);
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
                        postID: post.id,
                        author: post.userName,
                        authorAvatar: require("../../images/avatars/1.jpg"),
                        title: post.title,
                        body: post.content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                        date: post.date,
                        likesNum: post.likesNum

                    };
                    console.log(newPost.backgroundImage);
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
                postID: post.id,
                authorAvatar: require("../../images/avatars/1.jpg"),
                title: post.title,
                body: post.content.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                date: post.date,
                likesNum: post.likesNum
            };
            this.setState({
                PostsListOne: this.state.PostsListOne.concat(newPost)
            });
        }
    }
    
    async getPostsByUser(postID) {
        let post_id = postID;
        axios.get(`/posts/${post_id}`,
            {params: {postID: post_id}}
        ).then(async (response) => {
            const posts = response.data["posts"];
            for (let i = 0; i < posts.length; i++) {
                await this.getPic(posts[i]);
            }
        }).catch(function (error) {
            console.log(error);
        })
    }
    
    addLike() {
        axios({
            method: 'post',
            url: '/posts/addLike',
            data: {
                postID: this.state.postID,
                userID: store.getState()._id
            }
        }).then(() => {
            console.log("added like");
        }).catch( function(error) {
            console.log(error);
        })
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
                        badge = "sharing"
                        days = {post.date}
                        lnum = {post.likesNum}
                        cnum = "2"
                        addLike={this.addLike}
                    />
                    </Col>
            ))
        );
    }
}

export default withRouter(UserProfile);