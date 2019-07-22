import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v2";
export default class Message extends React.Component {
  state = {
    messages: []
  };
  constructor(props) {
    super(props);
    this.getData();
  }
  getData = () => {
    const authToken = localStorage.getItem("authToken");
    axios
      .get("/messages", {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then(response => {
        this.setState({
          messages: response.data.data
        });
        // console.log(this.state.messages[0].id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //   display = () => {
  //       console.log(this.state);

  //   }
  render() {
    return (
      <div id="messages">
        <div>jhghdj</div>
        {this.state.messages.map(message => (
          <div id="message">
            <div id="message-header">
              <p className="from">from : {message.from}</p>
              <p id="status" className={message.status}>{message.status}</p>
            </div>
            <p className="content">message : {message.message}</p>
          </div>
        ))}
      </div>
    );
  }
}
