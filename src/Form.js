import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [elapsed_time, setElapsed_time] = useState(0);
  const [distance, setDistance] = useState(0);
  const [message, setMessage] = useState("");

  let access_token = localStorage.getItem("strava-access-token");
  console.log("access_token", access_token);

  const submit = async (event) => {
    event.preventDefault();
    const d = new Date();
    let text = d.toISOString();
    let obj = {
      name: name,
      type: "Run",
      sport_type: "Run",
      start_date_local: text,
      elapsed_time: elapsed_time,
      description: description,
      distance: distance,
      trainer: 1,
      commute: 1,
    };
    console.log("obj", JSON.stringify(obj));
    const options = {
      method: "POST",
      url: "https://www.strava.com/api/v3/activities",
      headers: {
        Authorization: `Bearer 431d7443db4bbaf8520c9d9c534506191fb17da8`,
        "content-type": "application/json",
      },
      data: obj,
    };
    const { data } = await axios.request(options);
    console.log("data", JSON.stringify(data));
    setMessage("Success");
  };

  return (
    <form>
      {message}
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your type:
        <input type="text" value={"Run"} disabled />
      </label>
      <br />
      <label>
        Enter your short type:
        <input type="text" value={"Run"} disabled />
      </label>
      <br />
      <label>
        Enter your elapsed time:
        <input
          type="text"
          value={elapsed_time}
          inputMode="numeric"
          onChange={(e) => setElapsed_time(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter your distance:
        <input
          type="text"
          value={distance}
          inputMode="numeric"
          onChange={(e) => setDistance(e.target.value)}
        />
      </label>
      <br />
      <button onClick={submit}>Submit</button>
    </form>
  );
}
