import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" desc="Welcome, Please Enter Your Detail's">
             <FormLogin />
        </AuthLayouts>
    )
}

export default LoginPage