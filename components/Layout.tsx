import NavBar from "./NavBar";
import React from "react";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
