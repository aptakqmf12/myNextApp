"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

enum InputType {}

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reqSigin = () => {
    axios.post(
      "/api/auth/authenticate",
      {
        email,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MASTER_TOKEN}`,
        },
      }
    );
  };

  useEffect(() => {}, []);
  return (
    <div>
      <h2>로그인 페이지</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={reqSigin}>submit</button>
    </div>
  );
}
