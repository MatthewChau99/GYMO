/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button,
  NavLink
} from "shards-react";
import BlogPost from "../components/blog/BlogPost";


import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // First list of posts.
            // Second list of posts.
            // Third list of posts.
            PostsListThree: [
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/1.jpg"),
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                },
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/2.jpg"),
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                },
                {
                    author: "John James",
                    authorAvatar: require("../images/avatars/3.jpg"),
                    title:
                        "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                }
            ],

            // Fourth list of posts.
            PostsListFour: [
                {
                    backgroundImage: require("../images/content-management/7.jpeg"),
                    author: "Alene Trenton",
                    authorUrl: "#",
                    category: "News",
                    categoryUrl: "#",
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                },
                {
                    backgroundImage: require("../images/content-management/8.jpeg"),
                    author: "Chris Jamie",
                    authorUrl: "#",
                    category: "News",
                    categoryUrl: "#",
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                },
                {
                    backgroundImage: require("../images/content-management/9.jpeg"),
                    author: "Monica Jordan",
                    authorUrl: "#",
                    category: "News",
                    categoryUrl: "#",
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                },
                {
                    backgroundImage: require("../images/content-management/10.jpeg"),
                    author: "Monica Jordan",
                    authorUrl: "#",
                    category: "News",
                    categoryUrl: "#",
                    title: "Nice Work out experience",
                    body:
                        "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                }
            ]
        };
    }

    render() {
        const {
            PostsListThree,
            PostsListFour
        } = this.state;

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
