import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "shards-react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    login() {
        const self = this;
        axios({
            method: 'post',
            url: '/login',
            data: {
                email: this.state.email,
                password: this.state.password
            }
        }).then(function (response) {
            console.log(response.data.message);
            // if (self.state.returnPage) {
            //     self.props.history.push(self.state.returnPage);
            //     return;
            // }
        })
            .catch(function (error) {
                console.log(error.response.data.message);
            });
    }

    render() {
        return (
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(event) => this.updateEmail(event)}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={this.state.password}
                        onChange={(event) => this.updatePassword(event)}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                            Remember me
                        </label>
                    </div>
                </div>

                <Button
                    type="submit"
                    className="btn btn-primary btn-block"
                    tag={Link} to="blog-posts"
                    onClick={() => this.login()}
                >
                    Submit
                </Button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}
