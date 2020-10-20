import React, {Component} from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";
import axios from "axios";

export default class UserAccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedName: "",
            updatedPhone: "",
            updatedPassword: "",
        };
    }

    updateName(event) {
        this.setState({updatedName: event.target.value});
    }

    updatePhone(event) {
        this.setState({updatedPhone: event.target.value});
    }

    updatePassword(event) {
        this.setState({updatedPassword: event.target.value});
    }

    updateAccountInfo(event) {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/account/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then( (response) => {
            if (response.data['login'] === 1) { // Login successful
                this.setState({returnPage: 'blog-overview'});
            } else if (response.data['login'] === 0) {  // Password incorrect
                this.setState({returnPage: 'login'});
            } else {        // User doesn't exist
                this.setState({returnPage: 'login'});
            }
            window.location.href = this.state.returnPage
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Account Details</h6>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form>
                                    <Row form>
                                        {/* First Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feName">Name</label>
                                            <FormInput
                                                id="feName"
                                                placeholder="Name"
                                                value="Xinman"
                                                onChange={(event) => this.updateName(event)}
                                            />
                                        </Col>
                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePhone">Phone</label>
                                            <FormInput
                                                id="fePhone"
                                                placeholder="Phone"
                                                value="Zhang"
                                                onChange={(event) => this.updatePhone(event)
                                                }
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Email */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feEmail">Email</label>
                                            <FormInput
                                                type="email"
                                                id="feEmail"
                                                placeholder="Email Address"
                                                value="aaa@example.com"
                                                onChange={() => {
                                                }}
                                                autoComplete="email"
                                            />
                                        </Col>
                                        {/* Password */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePassword">Password</label>
                                            <FormInput
                                                type="password"
                                                id="fePassword"
                                                placeholder="Password"
                                                value="EX@MPL#P@$$w0RD"
                                                onChange={(event) => this.updatePassword(event)}

                                                autoComplete="current-password"
                                            />
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <label htmlFor="feAddress">Address</label>
                                        <FormInput
                                            id="feAddress"
                                            placeholder="Address"
                                            value="1234 Main St."
                                            onChange={() => {
                                            }}
                                        />
                                    </FormGroup>
                                    <Row form>
                                        {/* City */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">City</label>
                                            <FormInput
                                                id="feCity"
                                                placeholder="City"
                                                onChange={() => {
                                                }}
                                            />
                                        </Col>
                                        {/* State */}
                                        <Col md="4" className="form-group">
                                            <label htmlFor="feInputState">State</label>
                                            <FormSelect id="feInputState">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </FormSelect>
                                        </Col>
                                        {/* Zip Code */}
                                        <Col md="2" className="form-group">
                                            <label htmlFor="feZipCode">Zip</label>
                                            <FormInput
                                                id="feZipCode"
                                                placeholder="Zip Code"
                                                onChange={() => {
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Description */}
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feDescription">Description</label>
                                            <FormTextarea id="feDescription" rows="5"/>
                                        </Col>
                                    </Row>
                                    <Button theme="accent">Update Account</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>);
    }
}
