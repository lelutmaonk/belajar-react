import FormInput from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action="">
          <FormInput label="Name" type="text" placeholder="Enter your name"/>
          <FormInput label="Email" type="email" placeholder="example@mail.com"/>
          <FormInput label="Password" type="password" placeholder="****************"/>
          <FormInput label="Confirm Password" type="password" placeholder="****************"/>
          <Button children="Register" bgColor="bg-blue-700 w-full" />
        </form>
    )
}

export default FormRegister