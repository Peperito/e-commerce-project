import { getUserById } from "../api/users";
import SideBar from "../components/SideBar";
import React from "react";


export default function Profile() {

    return (
      <main className="fixed top-0 left-48">
        <SideBar />
        <p>Hello test</p>
        <p>{() => getUserById}</p>
      </main>
    );
  }