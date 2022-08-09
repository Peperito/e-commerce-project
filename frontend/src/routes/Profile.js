import { getUserById } from "../api/users";
import SideBar from "../components/SideBar";
import React from "react";


export default function Profile() {

    return (
      <main className="fixed top-0 left-48">
        <SideBar />
        <button class="bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" 
            type="button"
            onClick={() => getUserById()}
            >
              View Profile
        </button>
      </main>
    );
  }