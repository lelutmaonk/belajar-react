import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" desc="Welcome, Please Enter Your Detail's">
             <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage