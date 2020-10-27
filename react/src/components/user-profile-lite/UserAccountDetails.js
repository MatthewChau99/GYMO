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
            email: "xinman@hello.edu",
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

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updatePassword(event) {
        this.setState({updatedPassword: event.target.value});
    }

    updateAccountInfo(event) {
        event.preventDefault();
        axios({
            method: 'patch',
            url: '/account/updateInfo',
            data: {
                email: this.state.email,
                name: this.state.updatedName,
                phone: this.state.updatedPhone,
                password: this.state.updatedPassword
            }
        }).then( () => {
            window.location.href = 'user-profile-lite'
        }).catch(function (error) {
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
                                                onChange={(event) => this.updateName(event)}
                                            />
                                        </Col>
                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePhone">Phone</label>
                                            <FormInput
                                                id="fePhone"
                                                placeholder="Phone"
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
                                                value={this.state.email}
                                                autoComplete="email"
                                                onChange={(event) => this.updateEmail(event)}
                                            />
                                        </Col>
                                        {/* Password */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePassword">Password</label>
                                            <FormInput
                                                type="password"
                                                id="fePassword"
                                                placeholder="Password"
                                                value="123456"
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
                                    <Button type="submit"
                                            theme="accent"
                                            onClick={(event) => this.updateAccountInfo(event)}>Update Account</Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>);
    }
}
