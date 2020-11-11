import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Form, FormInput

} from "shards-react";

const Comments = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
          
          <span className="d-flex mb-2">
            
            <strong className="mr-1">Ran Xu:</strong>{" "}
            <strong className="text-dark">Thanks for sharing!</strong>{" "}
          </span>
          
          <span className="d-flex mb-2">
            
            <strong className="mr-1">X. Zhang:</strong>{" "}
            <strong className="text-dark">Nice to hear that!</strong>{" "}
          </span>
          <Form>
              <FormInput placeholder="Comment Something!">

              </FormInput>
          </Form>
          
        </ListGroupItem>

      </ListGroup>
    </CardBody>
  </Card>
);

Comments.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Comments.defaultProps = {
  title: "Comments"
  
};

export default Comments;
