const Button = (props) => {
    const {children = "Default", bgColor = "bg-red-700", textColor = "text-white"} = props
    // const {children, bgColor = "bg-red-700", textColor = "text-white"} = props
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${bgColor} ${textColor}`}>
        {children}
      </button>
    )
  }

export default Button