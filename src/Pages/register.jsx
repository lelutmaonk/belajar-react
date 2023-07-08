import { Link } from "react-router-dom"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register" desc="Welcome, Please Enter Your Detail's">
             <FormRegister />
             <p className="mt-2 text-center">You have an account ? <Link to={"/login"} className="text-blue-700 font-bold">Login here</Link></p>
        </AuthLayouts>
    )
}

export default RegisterPage