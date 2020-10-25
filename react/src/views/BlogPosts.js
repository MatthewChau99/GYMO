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

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage: require("../images/content-management/1.jpeg"),
          //category: "Business",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Nice Work out experience",
          body: 
            "I’m so exited to finally have the chance to try out this app...",
          date: "21 September 2020"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          //category: "Travel",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Nice Work out experience",
          body:
            "I’m so exited to finally have the chance to try out this app...",
          date: "21 September 2020"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          //category: "Technology",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Nice Work out experience",
          body:
            "I’m so exited to finally have the chance to try out this app...",
          date: "21 September 2020"
        },
        {
          backgroundImage: require("../images/content-management/4.jpeg"),
          //category: "Business",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "Nice Work out experience",
          body:
            "I’m so exited to finally have the chance to try out this app...",
          date: "21 September 2020"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/5.jpeg"),
          //category: "Travel",
          categoryTheme: "info",
          author: "Anna Ken",
          authorAvatar: require("../images/avatars/0.jpg"),
          title:
            "Nice Work out experience",
          body:
            "I’m so exited to finally have the chance...",
          date: "21 September 2020"
        },
        {
          backgroundImage: require("../images/content-management/6.jpeg"),
          //category: "Business",
          categoryTheme: "dark",
          author: "John James",
          authorAvatar: require("../images/avatars/1.jpg"),
          title:
            "Nice Work out experience",
          body:
            "I’m so exited to finally have the chance...",
          date: "21 September 2020"
        }
      ],

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
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Blog Posts" subtitle="Components" className="text-sm-left" />
        </Row>

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1" >
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
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
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody tag={Link} to="blog-details">
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
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

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
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

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Fourth Row of posts */}
        <Row>
          {PostsListFour.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post h-100">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                />
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text">{post.body}</p>
                </CardBody>
                <CardFooter className="text-muted border-top py-3">
                  <span className="d-inline-block">
                    By
                    <a className="text-fiord-blue" href={post.authorUrl}>
                      {post.author}
                    </a>{" "}
                    in
                    <a className="text-fiord-blue" href={post.categoryUrl}>
                      {post.category}
                    </a>
                  </span>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BlogPosts;
