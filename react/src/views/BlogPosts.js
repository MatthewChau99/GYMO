/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {Container, Row} from "shards-react";
import BlogPost from "../components/blog/BlogPost";


import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left"/>
                </Row>

                {/* First Row of Posts */}
                <Row>
                <BlogPost/>
                </Row>
            </Container>
        );
    }
}

export default BlogPosts;
