import React from 'react';
class Mastermind extends React.Component {
  render() {
    return(
      <div id="ultimate-container">
        <h2>Rendering Mastermind</h2>
        <div id="game-box">
          <div id="color-choice-list">
            <ul id="color-list">
              <li className="color blue"></li>
              <li className="color red"></li>
              <li className="color purple"></li>
              <li className="color orange"></li>
              <li className="color black"></li>
              <li className="color yellow"></li>
              <li className="color turquoise"></li>
              <li className="color green"></li>
            </ul>
          </div>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
          <ul id='response-spot'>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Mastermind;
