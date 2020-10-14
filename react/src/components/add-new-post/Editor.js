import React, {Component} from "react";
import ReactQuill from "react-quill";
import {Card, CardBody, Form, FormInput} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postContent: ""
        };
    }

    updatePostTitle(event) {
        this.setState({postTitle: event.target.value});
    }

    updatePostContent(event) {
        this.setState({postContent: event.target.value});
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardBody>
                    <Form className="add-new-post">
                        <FormInput size="lg" className="mb-3" placeholder="Your Post Title"/>
                        <ReactQuill className="add-new-post__editor mb-1"/>
                    </Form>
                </CardBody>
            </Card>
        );
    };
}

