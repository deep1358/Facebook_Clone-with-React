import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"
import Feed from "./Feed"
import "./App.css"
import Widgets from "./Widgets"
import Login from "./Login"
import { useStateValue } from "./StateProvider"

export default function App() {

  const [{ user }, dispatch] = useStateValue();

  console.log(user)

  //  const user = null;

  return (
    <div className="app">
      {!user ? (<Login />) :
        (
          <>
            <Header />
            <div className="app_body">
              <SideBar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  )
}