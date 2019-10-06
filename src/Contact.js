import React, { Component } from "react";
import "./App.css";

export default class Contact extends Component {
  componentDidMount() {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbymwZ3aN6gunOLUXcKH07VJQWAFHR6mIx4biteWWTeE4rdwC60/exec";
    const form = document.getElementById("google-form");

    form.addEventListener("submit", e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
      })
        .then(response => console.log("Success!", response))
        .then(alert("Ill shoot you an email for the next one!"))
        .then(form.reset())
        .catch(error => console.log("Error!,", error));
    });
  }
  render() {
    return (
      <div className="contact">
        <form name="submit-to-google-sheet" id="google-form">
          <div className="label">
            <strong>Stay updated!</strong>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address "
            className="email-input"
            required
          ></input>
          <input type="submit" value="Subscribe" className="subscribe"></input>
        </form>
      </div>
    );
  }
}
