import Input from "./Input"
import Label from "./Label"

const FormInput = (props) => {
    const {label, type, placeholder, name} = props
    return(
        <div className="mb-6">
            <Label name={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} id={name}/>
        </div>
    )
}

export default FormInput