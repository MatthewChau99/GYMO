import React, {Component} from "react";
import axios from "axios";

import {connect} from "react-redux";
import {LoginAction} from "../../states/actions";
import {withRouter, Redirect} from "react-router-dom";
import Button from "react-bootstrap/Button";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            password: "",
            repeated: "",
            formErrors: {Email: '', Password: ''},
            emailValid: false,
            passwordValid: false,
            signUpBtnClicked: false,
            success: false,
            avatarID: ""
        };
    }

    updateUsername(event) {
        this.setState({name: event.target.value});
    }

    updatePhone(event) {
        this.setState({phone: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    updateRepeated(event) {
        this.setState({repeated: event.target.value});
    }

    uploadAvatar(event) {
        const self = this;
        axios({
            method: 'post',
            url: 'pic/postPic',
            data: {
                name: this.state.name[0].toUpperCase(),
                desc: 'Avatar',
                filename: "images/avatars/" + this.state.name[0].toUpperCase() + ".png",
            }
        }).then(function(response) {
            if (response.status === 200) {
                self.setState({
                    avatarID: response.data.avatarID
                })
            }


        }).catch(function (error) {
            console.log(error);
        });
    }

    async register(event) {
        event.preventDefault();
        if(!this.state.signUpBtnClicked){
            this.setState({signUpBtnClicked: true});
        }
        else{
            return;
        }

        const self=this;
        axios({
            method: 'post',
            url: '/account/register',
            data: {
                name: self.state.name,
                phone: self.state.phone,
                email: self.state.email,
                password: self.state.password
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    self.setState({success: true});
                    console.log(response);

                    //self.setState({isLoggedIn: true});
                    //self.setState({returnPage: 'blog-overview'});
                    //self.props.loginState(response.data);
                    //window.location.href = self.state.returnPage;
                    //self.props.history.push(self.state.returnPage);
                    //Login.login(event);
                    axios({
                        method: 'post',
                        url: '/account/login',
                        data: {
                            email: self.state.email,
                            password: self.state.password
                        }
                    }).then((response) => {
                        if (response.data['login'] === 1) {
                            console.log(response);                // Login successful
                            self.setState({isLoggedIn: true});
                            self.setState({returnPage: 'blog-overview'});
                            self.props.loginState(response.data['user']);
                        } else if (response.data['login'] === 0) {              // Password incorrect
                            self.setState({returnPage: 'login'});
                        } else {                                                // User doesn't exist
                            self.setState({returnPage: 'login'});
                        }
                        self.props.history.push(self.state.returnPage);
                        // window.location.href = this.state.returnPage
                    }).catch(function (error) {
                        console.log(error)
                    });
                }
            }).catch(function (error) {
            // Materialize.toast(error.response.data.message, 4000);
            console.log(error);
        });

        this.setState({signUpBtnClicked: false});
    }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" value={this.state.name}
                           onChange={(event) => this.updateUsername(event)}/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Phone" value={this.state.phone}
                            onChange={(event) => this.updatePhone(event)}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={this.state.email}
                            onChange={(event) => this.updateEmail(event)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password}
                            onChange={(event) => this.updatePassword(event)}/>
                </div>

                <div className="form-group">
                    <label>Repeat Password</label>
                    <input type="password" className="form-control" placeholder="Repeat password" value={this.state.repeated}
                           onChange={(event) => this.updateRepeated(event)}/>
                </div>

                <Button type="submit" onClick={(event) => this.register(event)} size="md" className="btn btn-primary btn-block">Sign Up</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="login">sign in?</a>
                </p>
            </form>
        );
    }
}


const mapStateToProps = state => {
    return{
        state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginState: (user) => dispatch(LoginAction(user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(SignUp));