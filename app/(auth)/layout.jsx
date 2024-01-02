import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">
          {" "}
          <h2>Pippo's Dashboard</h2>
        </Link>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Log In</Link>
      </nav>
      {children}
    </>
  );
};

export default AuthLayout;
