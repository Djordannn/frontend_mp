import * as React from "react";
import { Metadata } from "next";

interface ILogin {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Login",
  description: "Join to share your story",
};

const LoginLayout: React.FunctionComponent<ILogin> = ({ children }) => {
  return <div>{children}</div>;
};

export default LoginLayout;