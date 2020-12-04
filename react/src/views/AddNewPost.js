import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";
import {withRouter} from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarActions from "../components/add-new-post/SidebarActions";
import AuthError from "../views/AuthError";
import SidebarCategories from "../components/add-new-post/SidebarCategories";
import PropTypes from "prop-types";
import axios from "axios";
import store from "../states/store";
import {connect} from "react-redux";


class AddNewPost extends Component {
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
            user: store.getState().user
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
                userID: this.state.user['_id'],
                pictureId: picId,
                likes: [],
                likesNum: 0,
                comments: []
            }
        }).then(function (response) {
            console.log(response.data);
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
                filename: "public/1.jpg"            //currently hardcoded
            }
        }).then( function(response) {
            return response['imgId'];
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        if (store.getState().loginStatus) {
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
                            {/*<SidebarCategories/>*/}
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (<AuthError/>);
        }

    }
}

const mapStateToProps = state => ({
    state
});

export default connect(
    mapStateToProps,
)(withRouter(AddNewPost));
