import React from "react";
import axios from "axios";

export default class Sent extends React.Component {
  state = {
    messages: []
  };
  constructor(props) {
    super(props);
    console.log("this.what");

    const {
      match: { params }
    } = this.props;
    this.what = params.what;
    this.authToken = localStorage.getItem("authToken");
    this.getSent();
  }

  getSent = () => {
    axios
      .get(`/messages/${this.what}`, {
        headers: {
          Authorization: `Bearer ${this.authToken}`
        }
      })
      .then(response => {
        const { data } = response.data;
        if (data !== 'no message for you') {
            console.log(data);
            
          this.setState({
            messages: data
          });
        }
      })
      .catch(error => {});
  };
  render() {
    return (
      <div id="sents">
        <h1>{this.what}</h1>

        {this.state.messages.length > 0 
        ?
        this.state.messages.map(sent => (
              <div id="message">
                <div id="message-header">
                  <p className="from">to : {sent.to}</p>
                  <p id="date" className={sent.status}>
                    {new Date(sent.created_at).toLocaleString("en-us")}
                  </p>
                </div>
                <p id="subject">Subject : {sent.subject + ""}</p>
                <p id="content">message : {sent.message}</p>
              </div>
            ))
        : <div>no message for</div>
        }
      </div>
    );
  }
}
