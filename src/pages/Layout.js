import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header";

export default function Layout() {
  return (
    <>
      <div className="col-12 header"></div>
      <Outlet />
      <div className="col-12 footer"></div>
    </>
  );
}
