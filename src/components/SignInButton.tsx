"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  const handleSignIn = () => {
    signIn("github");
  };
  return (
    <div>
      <Button onClick={handleSignIn}>Sign In With Github</Button>
    </div>
  );
};

export default SignInButton;
