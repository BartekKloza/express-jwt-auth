import React, { Component } from "react";

export default class DebugInfo extends Component {
  render() {
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : 'No token present in Local Storage'
    return (
        <div className="text-center">
          <h5>Debug Local Storage info:</h5>
          <p>Token string:</p>
    <pre>{token}</pre>
        </div>
    );
  }
}
