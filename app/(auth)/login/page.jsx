"use client";

import React from "react";
import AuthForm from "../AuthForm";

const LogIn = () => {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log("user lgin", email, password);
  };
  return (
    <main className="text-center">
      <h2>Log In</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default LogIn;
