/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {Button, Card, CardBody, CardHeader, ListGroup, ListGroupItem} from "shards-react";

const Author = ({title, author, page, tpost, datestarted}) => (
    <Card small className="mb-3">
        <CardHeader className="border-bottom">
            <h6 className="m-0">{title}</h6>
        </CardHeader>

        <CardBody className="p-0">
            <ListGroup flush>
                <ListGroupItem className="p-3">
          <span className="d-flex mb-2">
          <div className="card-post__author d-flex">
                    <a
                        href="#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{backgroundImage: `url(${require("../../images/avatars/1.jpg")})`}}
                    >
                      Written by {author}
                    </a>
                  </div>
          </span>
                    <span className="d-flex mb-2">
            <i className="material-icons mr-1">face</i>
            <strong className="mr-1">User Name:</strong>{" "}
                        <strong className="text-dark">{author}</strong>{" "}
          </span>

                    <span className="d-flex mb-2">
            <i className="material-icons mr-1">insert_invitation</i>
            <strong className="mr-1">Date Started:</strong>{" "}
                        <strong className="text-warning">{datestarted}</strong>{" "}
          </span>
                    <span className="d-flex mb-2">
            <i className="material-icons mr-1">bookmark</i>
            <strong className="mr-1">Total Posts:</strong>{" "}
                        <strong className="text-light">{tpost}</strong>
          </span>
                    <span className="d-flex">
            <i className="material-icons mr-1">forward</i>
            <strong className="mr-1" href="#">Main Page</strong>{" "}

                        <a className="ml-auto" href={page}>
              Enter
            </a>
          </span>
                </ListGroupItem>
                <ListGroupItem className="d-flex px-3 border-0">
                    <Button outline theme="accent" size="sm">
                        <i className="material-icons">chat_bubble_outline</i> Message
                    </Button>
                    <Button theme="accent" size="sm" className="ml-auto">
                        <i className="material-icons">add</i> Follow
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </CardBody>
    </Card>
);

Author.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string
};

Author.defaultProps = {
    title: "Author"

};

export default Author;
