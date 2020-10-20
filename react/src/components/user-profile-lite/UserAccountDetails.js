import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
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


export default class UserAccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            //phone: "",
            email: "",
            password: "",
            address: "",
            city: "",
            state: "",
            zip: 0,
            description: ""
        };
        // this.resend = this.resend.bind(this);
    }

    updateFirstName(event) {
        this.setState({firstName: event.target.value});
    }

    updateLastName(event) {
        this.setState({lastName: event.target.value});
    }

    //updatePhone(event) {
    //    this.setState({phone: event.target.value});
    //}

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    updateCity(event) {
        this.setState({city: event.target.value});
    }

    //updateState(event) {
    //  this.setState({state: event.target.value});
    //}

    updateZip(event) {
        this.setState({zip: event.target.value});
    }


    render() {
        return (
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
                                        {/* First Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feFirstName">First Name</label>
                                            <FormInput
                                                id="feFirstName"
                                                placeholder="First Name"
                                                value={this.state.firstName}
                                                onChange={(event) => this.updateFirstName(event)}
                                            />
                                        </Col>
                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feLastName">Last Name</label>
                                            <FormInput
                                                id="feLastName"
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                                onChange={(event) => this.updateLastName(event)}
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
                                                onChange={(event) => this.updateEmail(event)}
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
                                                value={this.state.password}
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
                                            value={this.state.address}
                                            onChange={(event) => this.updateAddress(event)}
                                        />
                                    </FormGroup>
                                    <Row form>
                                        {/* City */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">City</label>
                                            <FormInput
                                                id="feCity"
                                                placeholder="City"
                                                value={this.state.city}
                                                onChange={(event) => this.updateCity(event)}
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
                                                value={this.state.zip}
                                                onChange={(event) => this.updateZip(event)}
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
            </Card>
        );
    }
}