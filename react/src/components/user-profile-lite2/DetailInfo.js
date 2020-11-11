import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
  Container
} from "shards-react";

const DetailInfo = ({ title }) => (
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>

              <Row form>
                {/* height */}
                <Col md="12" className="form-group">
                  <label htmlFor="feHeight">Height</label>
                  <FormInput
                    type="height"
                    id="feHeight"
                    placeholder="Height in cm"
                    value="165"
                    onChange={() => {}}
                    autoComplete="height"
                  />
                </Col>
              </Row> 
              <Row form>
                {/* weight */}
                <Col md="12" className="form-group">
                  <label htmlFor="feWeight">Weight</label>
                  <FormInput
                    type="weight"
                    id="feWeight"
                    placeholder="Weight in lb"
                    value="95"
                    onChange={() => {}}
                    autoComplete="current-password"
                  />
                </Col>
              </Row> 
              <Row form>

                {/* First Name */}
                <Col md="4" className="form-group">
                  <label htmlFor="feBreast">Breast M.</label>
                  <FormInput
                    id="feBreast"
                    placeholder="Breast Measurement"
                    value="88.70"
                    onChange={() => {}}
                  />
                </Col>
                {/* Last Name */}
                <Col md="4" className="form-group">
                  <label htmlFor="feWaist">Waist M.</label>
                  <FormInput
                    id="feWaist"
                    placeholder="Waist Mearsurement"
                    value="62.61"
                    onChange={() => {}}
                  />
                </Col>
                <Col md="4" className="form-group">
                  <label htmlFor="feHip">Hip M.</label>
                  <FormInput
                    id="feHip"
                    placeholder="Hip Measurement"
                    value="90.00"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feBMI">B.M.I.</label>
                  <FormInput
                    type="BMI"
                    id="feBMIl"
                    placeholder="Body Mass Index"
                    value="17.447"
                    onChange={() => {}}
                  />
                </Col>
                <Col md="6" className="form-group">
                  <label htmlFor="feBodyfat">Body Fat</label>
                  <FormInput
                    type="bodyfat"
                    id="feBodyfat"
                    placeholder="Body Fat"
                    value="20%"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Col>
                <label>Health Condition: Underweighted!</label>
              </Col>
              <br />
              <Button theme="accent">Update Information</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
    
    
  </Card>
);

DetailInfo.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

DetailInfo.defaultProps = {
  title: "Tell us more",

};

export default DetailInfo;
