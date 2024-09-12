import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  let myObj={
    name:"nilu",
    age:22
  }
  let newArray=[1,2,3]

  
  return (
    <>
      <Card username="shruti" btnText="Click Me"/>
      <Card username="nilu" btnText="Submit"/>
    </>
  );
}

export default App;
