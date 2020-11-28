import React, {Component} from "react";
import {
    Button,
    Card,
    CardHeader,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    ListGroup,
    ListGroupItem,
    Row
} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {withRouter} from "react-router-dom";


class UserAccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: store.getState().user,
            name: store.getState().user.name,
            email: store.getState().user.email,
            updatedName: store.getState().user.name,
            updatedPhone: store.getState().user.phone,
            updatedPassword: store.getState().user.password,
            updatedIntro: store.getState().user.intro,
            userID: this.props.userID,
        };
    }

    updateName(event) {
        this.setState({updatedName: event.target.value});
        console.log(this.state.updatedName);
    }

    updatePhone(event) {
        this.setState({updatedPhone: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
        console.log(this.state.email);
    }

    updatePassword(event) {
        this.setState({updatedPassword: event.target.value});
    }

    updateIntro(event) {
        this.setState({updatedIntro: event.target.value});
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
                // password: this.state.updatedPassword
                intro: this.state.updatedIntro
            }
        }).then(() => {
            this.props.history.push('blog-posts');
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
                                                type="name"
                                                id="feName"
                                                placeholder="Name"
                                                value={this.state.updatedName}
                                                onChange={(event) => this.updateName(event)}
                                            />
                                        </Col>
                                        {/* Last Name */}
                                        <Col md="6" className="form-group">
                                            <label htmlFor="fePhone">Phone</label>
                                            <FormInput
                                                type="phone"
                                                id="fePhone"
                                                placeholder="Phone"
                                                value={this.state.updatedPhone}
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
                                                value={this.state.user.password}
                                                // onChange={(event) => this.updatePassword(event)}
                                                autoComplete="current-password"
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        {/* Description */}
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feDescription">Introduction</label>
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

export default withRouter(UserAccountDetails);