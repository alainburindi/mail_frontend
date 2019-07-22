import React from "react";
import axios from "axios";

axios.defaults.baseURL = "https://murmuring-lake-55717.herokuapp.com/api/v2";

export default class Login extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    confirmPassword: ""
  };
  changeState = e => {
    e.preventDefault();
    const { target } = e;
    this.setState({
      [target.name]: target.value
    });
  };

  register = e => {
    const self = this;
    e.preventDefault();
    axios
      .post("/auth/signup", {
        ...this.state
      })
      .then(response => {
        if (response.status === 201) {
            const { token } = response.data.data[0];
            localStorage.setItem("authToken", token);
            self.props.history.push('/messages')
        }
          else{
              console.log(response);
          }
      })
      .catch(error => {
        if (error.response.status === 422) {
          console.log(error.response.data.error.details[0].message);
        } else if (error.response.status === 409) {
          console.log(error.response.data.error);
        } else {
          console.log(error.response);
        }
      });
  };
  render() {
    return [
      <h1>Register</h1>,
      <div id="container">
        <div id="form">
          <label htmlFor="">Name</label>
          <input type="text" name="name" onChange={this.changeState} />
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={this.changeState} />
          <label htmlFor="">Password</label>
          <input type="password" name="password" onChange={this.changeState}/>
          <label htmlFor="">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={this.changeState}
          />
          <input
            type="submit"
            value="Register"
            id="submit"
            onClick={this.register}
          />
        </div>
      </div>
    ];
  }
}
