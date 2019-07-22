import React from "react";
import axios from "axios";
import "./login.css";
axios.defaults.baseURL = "https://murmuring-lake-55717.herokuapp.com/api/v2";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        localStorage.clear();
    }
  state = {
    email: "",
    password: ""
  };
  send = e => {
      const self = this;
    e.preventDefault();
    axios
      .post("/auth/login", {
        ...this.state
      })
      .then(function(response) {
        if (response.status === 200) {
          const { token } = response.data.data[0];
          localStorage.setItem("authToken", token);
          console.log(localStorage.getItem("authToken"));
          self.props.history.push('/messages')
        }
        else{
            console.log(response);
        }
      })
      .catch(function(error) {               
        if(error.response.status === 422){
            console.log(error.response.data.error.details[0].message);
        }else if (error.response.status === 401){
            console.log(error.response.data.error);
        }else{
            console.log(error.response);
        }
      });
  };

  changeState = e => {
    const { target } = e;
    e.preventDefault();
    this.setState({
        [target.name]: target.value,
    });
  };
  render() {
    return [
      <h1>Login</h1>,
      <div id="container">
        <form id="form">
          <label>Email</label>
          <input name="email" type="text" onChange={this.changeState} />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={this.changeState}/>
          <input type="submit" value="Login" id="submit" onClick={this.send} />
        </form>
      </div>
    ];
  }
}
