import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import Button from "./components/Button";

function App() {
  return (
    <div className="relative w-full h-screen bg-zinc-800 text-[#fff] overflow-x-hidden">
      <Background />
      <Foreground />
      <Button />
    </div>
  );
}

export default App;
