import FormInput from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    return (
        <form action="">
          <FormInput label="Email" type="email" placeholder="example@mail.com"/>
          <FormInput label="Password" type="password" placeholder="****************"/>
          <Button children="Login" bgColor="bg-blue-700 w-full" />
        </form>
    )
}

export default FormLogin