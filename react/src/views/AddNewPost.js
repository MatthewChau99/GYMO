import React, {Component} from "react";
import {Container, Row, Col} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import PropTypes from "prop-types";
import axios from "axios";


export default class AddNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postContent: "",
            postCategory: "",
            draftState: 0,
            visibility: "",
            propTypes: {titles: PropTypes.string},
            defaultProps: {title: "Actions"},
            userID: "5f870bc676520ab4c60ba64f"
        };
        this.updatePostTitle = this.updatePostTitle.bind(this);
        this.updatePostContent = this.updatePostContent.bind(this);
        this.uploadPost = this.uploadPost.bind(this);
    }

    updatePostTitle(event) {
        this.setState({postTitle: event.target.value});
    }

    updatePostContent(value) {
        this.setState({postContent: value});
    }

    async uploadPost(event) {
        const picId = await this.uploadImg(event);
        event.preventDefault();
        axios({
            method: 'post',
            url: '/posts/submitPost',
            data: {
                title: this.state.postTitle,
                content: this.state.postContent,
                userID: this.state.userID,
                pictureId: picId
            }
        }).then(function (response) {
            if (response.status === 200) {
                window.location.href = 'blog-overview';
            }
        }).catch(function (error) {
            console.log(error);
        });
    }

    async uploadImg(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/pic/postPic',
            data: {
                name: "img",
                desc: "img",
                filename: "public/1.jpg"
            }
        }).then( function(response) {
            return response['imgId'];
        }).catch(function(error) {
            console.log(error);
        })
    }


    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left"/>
                </Row>
                <Row>
                    {/* Editor */}
                    <Col lg="9" md="12">
                        <Editor updatePostContent={this.updatePostContent} updatePostTitle={this.updatePostTitle}/>
                    </Col>

                    {/* Sidebar Widgets */}
                    <Col lg="3" md="12">
                        <SidebarActions uploadPost={this.uploadPost}/>
                        <SidebarCategories/>
                    </Col>
                </Row>
            </Container>
        );
    }
}
