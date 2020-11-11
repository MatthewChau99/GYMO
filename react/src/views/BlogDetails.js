import React from "react";
import {Container, Row, Col} from "shards-react";
import {Link} from "react-router-dom";

import PageTitle from "../components/common/PageTitle";
import TextBody from "../components/blog-posts/TextBody";
import Author from "../components/blog-posts/Author";
import Details from "../components/blog-posts/Details";
import Comments from "../components/blog-posts/Comments";
import BlogDetail from "../components/blog/BlogDetail";
import UserProfile from "../components/blog/UserProfile";


const BlogDetails = () => (
    <Container fluid className="main-content-container px-4 pb-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle
                sm="4" title="Blog Detail"
                subtitle="Blog Posts"
                className="text-sm-left"
                tag={Link} to="blog-posts"
            />
        </Row>

    <Row>
    <BlogDetail/>

            {/* Sidebar Widgets */}
            <Col lg="3" md="12">
                <Author
                    author="Anna Kunis"
                    page="user-profile-lite"
                    datestarted="Sep 2020"
                    tpost="2"
                />
                <Details
                    postdate="21 Sep 2020"
                    tags="Sharing"
                />
                <Comments

                />
            </Col>
        </Row>
    </Container>
);

export default BlogDetails;
