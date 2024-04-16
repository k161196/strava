import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import qs from "qs";
// const axios = require("axios");
// const qs = require("qs");

export default function Callbak() {
  let [searchParams] = useSearchParams();
  const [count, setCount] = useState(0);

    const navigate = useNavigate();

  //   const [code, setCode] = useState();

  console.log(searchParams.get("code")); // 'name'

  useEffect(() => {
    if (count < 1) {
      setCount(1);
    //   localStorage.setItem(
    //     "strava-code",
    //     JSON.stringify(searchParams.get("code"))
    //   );

      let data = qs.stringify({
        client_id: "125049",
        client_secret: "29fb71fe309b99859bbf7031b6b536f56ad33241",
        code:
          searchParams.get("code") ??
          "645b694723055968febbee6cd159669637489986",
        grant_type: "authorization_code",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://www.strava.com/api/v3/oauth/token",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      axios(config).then((response) => {
        localStorage.setItem(
          "strava-access-token",
          JSON.stringify(response.data?.access_token)
        );

          navigate("/form");
      });
    }
  }, []);

  return <div>Callbak:{searchParams.get("code")}</div>;
}
