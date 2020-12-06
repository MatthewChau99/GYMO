import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Tell us more</h3>

                <div className="form-group">
                    <label>Height</label>
                    <input type="text" className="form-control" placeholder="Height" />
                </div>

                <div className="form-group">
                    <label>Weight</label>
                    <input type="text" className="form-control" placeholder="Weight" />
                </div>

                <div className="form-group">
                    <label>Breast Measure</label>
                    <input type="email" className="form-control" placeholder="Breast Measurement" />
                </div>

                <div className="form-group">
                    <label>Waist Measure</label>
                    <input type="password" className="form-control" placeholder="Waist Measurement" />
                </div>

                <div className="form-group">
                    <label>Hip Measure</label>
                    <input type="password" className="form-control" placeholder="Hip Measurement" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}