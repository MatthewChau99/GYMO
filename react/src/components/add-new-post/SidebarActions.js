/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    CardBody,
    ListGroup,
    ListGroupItem,
    Button
} from "shards-react";
import axios from "axios";
import {withRouter} from "react-router-dom";


class SidebarActions extends Component{
    constructor(props) {
        super(props);
        this.uploadPost = this.uploadPost.bind(this);
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
    }

    // updatePostCategory(event) {
    //     this.setState({postCategory: event.target.value});
    // }
    //
    // updateDraftState(event) {
    //     this.setState({draftState: event.target.value});
    // }
    //
    // updateVisibility(event) {
    //     this.setState({visibility: event.target.value});
    // }
    //
    // handleParentData(formModel) {
    //     this.setState({...formModel});
    // }

    uploadPost(event) {
        this.props.uploadPost(event);
        this.props.history.push('blog-posts');
    }

    render() {
        return (
            <Card small className="mb-3">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{this.state.defaultProps['title']}</h6>
                </CardHeader>

                <CardBody className="p-0">
                    <ListGroup flush>
                        {/*<ListGroupItem className="p-3">*/}
                        {/*    <span className="d-flex mb-2">*/}
                        {/*        <i className="material-icons mr-1">flag</i>*/}
                        {/*        <strong className="mr-1">Status:</strong> Draft{" "}*/}
                        {/*        <a className="ml-auto" href="#">Edit</a>*/}
                        {/*    </span>*/}
                        {/*    <span className="d-flex mb-2">*/}
                        {/*        <i className="material-icons mr-1">visibility</i>*/}
                        {/*        <strong className="mr-1">Visibility:</strong>{" "}*/}
                        {/*        <strong className="text-success">Public</strong>{" "}*/}
                        {/*        <a className="ml-auto" href="#">Edit</a>*/}
                        {/*    </span>*/}
                        {/*    <span className="d-flex mb-2">*/}
                        {/*        <i className="material-icons mr-1">calendar_today</i>*/}
                        {/*        <strong className="mr-1">Schedule:</strong> Now{" "}*/}
                        {/*        <a className="ml-auto" href="#">Edit</a>*/}
                        {/*    </span>*/}
                        {/*    <span className="d-flex">*/}
                        {/*        <i className="material-icons mr-1">score</i>*/}
                        {/*        <strong className="mr-1">Readability:</strong>{" "}*/}
                        {/*        <strong className="text-warning">Ok</strong>*/}
                        {/*    </span>*/}
                        {/*</ListGroupItem>*/}
                        <ListGroupItem className="d-flex px-3 border-0">
                            {/*<Button outline theme="accent" size="sm">*/}
                            {/*    <i className="material-icons">save</i> Save Draft*/}
                            {/*</Button>*/}
                            <Button block type="submit" onClick={(event) => this.uploadPost(event)}
                                    theme="accent" size="sm" className="ml-auto">
                                <i className="material-icons">file_copy</i> Publish
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </CardBody>
            </Card>
        );

    };
}

export default withRouter(SidebarActions);