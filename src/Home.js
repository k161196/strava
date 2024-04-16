import React from "react";
import logo from "./logo.svg";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://www.strava.com/oauth/mobile/authorize?client_id=125049&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&approval_prompt=auto&scope=activity%3Awrite%2Cread&state=test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect to Strava
        </a>
      </header>
    </div>
  );
}
