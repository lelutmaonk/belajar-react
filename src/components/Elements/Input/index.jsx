import Input from "./Input"
import Label from "./Label"

const FormInput = (props) => {
    const {label, type, placeholder} = props
    return(
        <div className="mb-6">
            <Label>{label}</Label>
            <Input type={type} placeholder={placeholder}/>
        </div>
    )
}

export default FormInput