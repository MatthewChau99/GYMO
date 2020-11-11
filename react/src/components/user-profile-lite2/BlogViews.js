import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge
} from "shards-react";

class BlogViews extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
        // First list of posts.
            PostsListOne: [
                {
                    backgroundImage: require("../../images/content-management/1.jpeg"),
                    //category: "Business",
                    categoryTheme: "dark",
                    author: "Anna Kunis",
                    authorAvatar: require("../../images/avatars/1.jpg"),
                    title: "Nice Work out experience",
                    body: 
                    "I’m so exited to finally have the chance to try out this app...",
                    date: "21 September 2020"
                }
            ],
            PostsListTwo: [
                {
                    backgroundImage: require("../../images/content-management/2.jpeg"),
                    //category: "Travel",
                    categoryTheme: "info",
                    author: "James Jamerson",
                    authorAvatar: require("../../images/avatars/2.jpg"),
                    title: "Nice Work out experience",
                    body:
                    "I’m so exited to finally have the chance to try out this app...",
                    date: "21 September 2020"
                }
            ],
            PostsListThree: [
                {
                    backgroundImage: require("../../images/content-management/3.jpeg"),
                    //category: "Technology",
                    categoryTheme: "royal-blue",
                    author: "Jimmy Jackson",
                    authorAvatar: require("../../images/avatars/2.jpg"),
                    title: "Nice Work out experience",
                    body:
                    "I’m so exited to finally have the chance to try out this app...",
                    date: "21 September 2020"
                }
            ],
            PostsListFour: [
                {
                    backgroundImage: require("../../images/content-management/4.jpeg"),
                    //category: "Business",
                    categoryTheme: "warning",
                    author: "John James",
                    authorAvatar: require("../../images/avatars/3.jpg"),
                    title: "Nice Work out experience",
                    body:
                    "I’m so exited to finally have the chance to try out this app...",
                    date: "21 September 2020"
                }
            ],
            PostsListFive: [
                {
                    backgroundImage: require("../../images/content-management/5.jpeg"),
                    //category: "Travel",
                    categoryTheme: "info",
                    author: "Anna Ken",
                    authorAvatar: require("../../images/avatars/0.jpg"),
                    title:
                      "Nice Work out experience",
                    body:
                      "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                  }
            ],
            PostsListSix: [
                {
                    backgroundImage: require("../../images/content-management/6.jpeg"),
                    //category: "Business",
                    categoryTheme: "dark",
                    author: "John James",
                    authorAvatar: require("../../images/avatars/1.jpg"),
                    title:
                      "Nice Work out experience",
                    body:
                      "I’m so exited to finally have the chance...",
                    date: "21 September 2020"
                  }
            ]
        };
    }
  
    render() {
        const {
          PostsListOne,
          PostsListTwo,
          PostsListThree,
          PostsListFour,
          PostsListFive,
          PostsListSix
        } = this.state;
    
        return (
          <Container fluid className="main-content-container">
  
            {/* First Row of Posts */}
            <Row>
                {PostsListOne.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx} >
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {PostsListTwo.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {PostsListThree.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {PostsListFour.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx}>
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {PostsListFive.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx} >
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {PostsListSix.map((post, idx) => (
                    <Col lg="12" sm="12" className="mb-4" key={idx} >
                    <Card small className="card-post card-post--aside card-post--1">
                        <div
                        className="card-post__image"
                        style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                        >
                        <Badge
                            pill
                            className={`card-post__category bg-${post.categoryTheme}`}
                        >
                            {post.category}
                        </Badge>
                        <div className="card-post__author d-flex">
                            <a
                            href="#"
                            className="card-post__author-avatar card-post__author-avatar--small"
                            style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                            >
                            Written by Anna Ken
                            </a>
                        </div>
                        </div>
                        <CardBody tag={Link} to="blog-details">
                        <h5 className="card-title">
                            <a className="text-fiord-blue" href="#">
                            {post.title}
                            </a>
                        </h5>
                        <p className="card-text text-muted d-inline-block mb-3">{post.body}</p>
                        <span className="text-muted">{post.date}</span>
                        </CardBody>
                    </Card>
                    </Col>
                ))}
            </Row>
            
        </Container>
    );
  }
}

export default BlogViews;