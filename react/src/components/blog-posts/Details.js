import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Badge
} from "shards-react";

const Details = ({ title, postdate, tags }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">event_available</i>
            <strong className="mr-1">Date Posted:</strong>{" "}
            <strong className="text-success">{postdate}</strong>{" "}
          </span>
          
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">menu</i>
            <strong className="mr-1">Tags:</strong>{" "}
            {/* <Badge
             pill
              className={`card-post__category bg-${"info"}`}
            >
              {tags}
            </Badge> */}
            <Badge
             pill
              className={`card-post__category bg-${"dark"}`}
            >
              {tags}
            </Badge>
            {/* <Badge
             pill
              className={`card-post__category bg-${"secondary"}`}
            >
              {tags}
            </Badge> */}
          </span>
          
        </ListGroupItem>

      </ListGroup>
    </CardBody>
  </Card>
);

Details.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Details.defaultProps = {
  title: "Other Details"
  
};

export default Details;
