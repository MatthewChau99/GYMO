import React, {Component} from "react";
import axios from "axios";

export default class SignUp extends Component {
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
            signUpBtnClicked: false
        };
        // this.resend = this.resend.bind(this);
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
        .then(function (response) {
            if (response.status === 200) {
                self.setState({success: true});
                window.location.href = 'blog-overview';
            }
        })
        .catch(function (error) {
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

                <button type="submit" onClick={(event) => this.register(event)} className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}