import { Link } from "react-router-dom"
import FormLogin from "../components/Fragments/FormLogin"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const LoginPage = () => {
    return (
        <AuthLayouts title="Login" desc="Welcome, Please Enter Your Detail's">
             <FormLogin />
                <p className="mt-2 text-center">Don't have an account ? <Link to={"/register"} className="text-blue-700 font-bold">Register here</Link></p>
        </AuthLayouts>
    )
}

export default LoginPage