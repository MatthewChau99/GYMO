import React, {Component} from "react";
import {Button, Card, CardHeader, Col, Form, FormInput, ListGroup, ListGroupItem, Row} from "shards-react";
import axios from "axios";
import store from "../../states/store";
import {withRouter} from "react-router-dom";


class UserAccountDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            name: "",
            email: "",
            updatedName: "",
            updatedPhone: 0,
            updatedIntro: "",
            userID: this.props.userID,
        };

        this.getUser(this.props.userID);
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

    updateIntro(event) {
        this.setState({updatedIntro: event.target.value});
    }

    getUser(userID) {
        let self = this;
        let user_id = userID;
        axios.get(`/account/user/${user_id}`,
            {params: {userID: user_id}}
        ).then( async (response) => {
            self.setState({
                user: response.data["user"],
                name: response.data["user"].name,
                email: response.data["user"].email,
                updatedName: response.data["user"].name,
                updatedPhone: response.data["user"].phone,
                updatedIntro: response.data["user"].intro
            });
            console.log(self);
        }).catch(function (error) {
            console.log(error);
        })
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
                                            <FormInput
                                                type="intro"
                                                id="feDescription"
                                                value={this.state.updatedIntro}
                                                onChange={(event) => this.updateIntro(event)}
                                                autoComplete="current-intro"
                                            />
                                            {/*<FormTextarea id="feDescription" rows="5"/>*/}
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