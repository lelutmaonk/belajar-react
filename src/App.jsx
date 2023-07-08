import React from "react";
import Button from "./components/Elements/Button";

function App() {
  return (
    <>
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button bgColor="bg-black" textColor="text-white">Login</Button>
        <Button bgColor="bg-white" textColor="text-black">Register</Button>
        <Button></Button>
      </div>
    </div>
    </>
  )
}

export default App
