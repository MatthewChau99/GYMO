import React, {Component} from "react";
import {PropTypes} from "react";
import ReactQuill from "react-quill";
import {Card, CardBody, Form, FormInput} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.updatePostTitle = this.updatePostTitle.bind(this);
        this.updatePostContent = this.updatePostContent.bind(this);
    }
    modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    };

    formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    updatePostTitle(event) {
        this.props.updatePostTitle(event);
    }

    updatePostContent(value) {
        this.props.updatePostContent(value);
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardBody>
                    <Form className="add-new-post">
                        <FormInput onChange={(event) => this.updatePostTitle(event)}
                                   size="lg" className="mb-3" placeholder="Your Post Title"/>
                        <ReactQuill onChange={this.updatePostContent}
                                    className="add-new-post__editor mb-1"
                                    theme="snow"
                                    modules={this.modules}
                                    formats={this.formats}
                                    />
                    </Form>
                </CardBody>
            </Card>
        );
    };
}

