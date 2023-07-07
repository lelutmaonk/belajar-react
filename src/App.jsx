import React from "react";

const Button = (props) => {
  const {children = "Default", bgColor = "bg-red-700", textColor = "text-white"} = props
  // const {children, bgColor = "bg-red-700", textColor = "text-white"} = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${bgColor} ${textColor}`}>
      {children}
    </button>
  )
}

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
