import React, { Component } from 'react'
import Spotify from './Spotify'
import Apple from './Apple'
import Bars from './Bars'
import cassette from './cassette-tape.png'
import './App.css';

export default class App extends Component {

  componentDidMount(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbymwZ3aN6gunOLUXcKH07VJQWAFHR6mIx4biteWWTeE4rdwC60/exec'
    const form = document.getElementById('google-form')
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
      })
        .then(response => console.log('Success!', response))
        .then(alert("Ill shoot you an email for the next one!"))
        .then(form.reset())
        .catch(error => console.log('Error!,', error))
    })
  }
  
  render() {
    
    return (
      <div className="App">
        <h1 className="App-header">Tape</h1>

        <Bars />

        <div className="cassette-wrapper" >
          <span className="chapter">Chapter 005</span>
          <img src={cassette} className="cassette" alt="cassette"></img>
          <div className="description">
            <div className="title">Prismatic</div>
            <div className="text">
              <strong>Sorry I'm late this week. I put together a melting pot of quirky, upbeat Alternative RnB/Jazz/Soul and what not. Some of these would definitely seem 'out there' for some, but give them a chance! Some of them took me a few listens to catch on to too. <br></br>Tell me what you think :)</strong>
            </div>
          </div>
        </div>

          <Spotify />
          <Apple />
        

        <div className="contact">
          <form name="submit-to-google-sheet" id="google-form">
            <div className="label"><strong>Stay updated!</strong></div>
            <input type="email" name="email" placeholder="Email address " className="email-input" required></input>
            <input type="submit" value="Subscribe" className="subscribe"></input>
          </form>
        </div>
      </div>
    )
  }
}


