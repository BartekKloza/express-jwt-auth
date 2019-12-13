import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "./constants";
import DebugInfo from "./DebugInfo";

export default class Home extends Component {
  state = {
    username: "",
    password: ""
  };
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(newUser);

    try {
      const res = await axios.post(API_URL + "user/newuser", newUser)
      console.log(res);
    } catch (error) {
      console.log(error.response.data); 
    }
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h5>Create Account</h5>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label>Username</label>
              <input
                onChange={this.handleInputChange}
                type="text"
                name="username"
                class="form-control"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                onChange={this.handleInputChange}
                type="password"
                name="password"
                class="form-control"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Create Account asd
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <DebugInfo></DebugInfo>
        </div>
      </div>
    );
  }
}
