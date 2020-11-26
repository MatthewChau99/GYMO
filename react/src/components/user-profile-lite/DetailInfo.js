import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, Card, CardHeader, Col, Form, FormInput, ListGroup, ListGroupItem, Row} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {withRouter} from "react-router-dom";
import AuthError from "../../views/AuthError";

class DetailInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: store.getState().user,
            height: 0,
            weight: 0,
            BMI: 0,
            BodyFatPerc: 0,
        }
    }

    updateHeight(event) {
        this.setState({height: event.target.value});
    }

    updateWeight(event) {
        this.setState({weight: event.target.value});
    }

    updateBMI(event) {
        this.setState({BMI: event.target.value});
    }

    updateBodyFatPerc(event) {
        this.setState({BodyFatPerc: event.target.value});
    }

    updateBodyInfo(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/account/addBodyInfo',
            data: {
                userID: this.state.user._id,
                date: new Date(Date.now()).toISOString().substring(0, 10),
                height: this.state.height,
                weight: this.state.weight,
                bmi: this.state.BMI,
                bodyFatPerc: this.state.BodyFatPerc
            }
        }).then(() => {
            this.props.history.push('blog-overview');
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Tell us more</h6>
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
                                                onChange={(event) => {
                                                    this.updateHeight(event)
                                                }}
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
                                                onChange={(event) => {
                                                    this.updateWeight(event)
                                                }}
                                                autoComplete="current-password"
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
                                                onChange={(event) => {
                                                    this.updateBMI(event)
                                                }}
                                            />
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feBodyfat">Body Fat</label>
                                            <FormInput
                                                type="bodyfat"
                                                id="feBodyfat"
                                                placeholder="Body Fat in percent"
                                                onChange={(event) => {
                                                    this.updateBodyFatPerc(event)
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Col>
                                        <label>Health Condition: Underweighted!</label>
                                    </Col>
                                    <br/>
                                    <Button theme="accent" onClick={(event) => {
                                        this.updateBodyInfo(event)
                                    }}>Update Information</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        )
    }
}

DetailInfo.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string
};

DetailInfo.defaultProps = {
    title: "Tell us more",
};

export default withRouter(DetailInfo);
