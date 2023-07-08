import { useRouteError } from "react-router-dom"

const Page404 = () => {
    const error = useRouteError()
    return (
        <>
         <div className="flex justify-center min-h-screen items-center bg-slate-700">
            <h1 className="text-red-500 text-xl font-bold">{error.statusText || error.message}</h1>
         </div>
        </>
    )
}

export default Page404