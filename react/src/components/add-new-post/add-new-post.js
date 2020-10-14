import React, {Component} from "react";
import {Container, Col, Row} from "shards-react";
import Editor from "./Editor";
import SidebarActions from "./SidebarActions";
import SidebarCategories from "./SidebarCategories";
import PropTypes from "prop-types";

export default class addNewPost extends Component {
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
            userID: "",
            success: false
        };
        this.updatePostTitle = this.updatePostTitle.bind(this);
        this.updatePostContent = this.updatePostContent.bind(this);
    }

    updatePostTitle(event) {
        this.setState({postTitle: event.target.value});
    }

    updatePostContent(event) {
        console.log(event);
        this.setState({postContent: event.target.value});
    }

    render() {
        return (
            <Container>

            </Container>
        );
    };
}

