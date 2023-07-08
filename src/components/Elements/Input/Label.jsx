const Label = (props) => {
    const {children = '', name}  = props
    return (
        <label 
        className="block text-slate-700 text-sm font-bold mb-2"
        htmlFor={name}
        >
        {children}
        </label>
    )
}

export default Label