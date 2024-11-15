import { Link } from "react-router-dom";



export default function LoggeInRequired() {
    return (

        <div className="h-[90vh] w-full p-5 flex justify-center items-center bg-white">
            <div className="container h-2/3 p-5 md:p-10 backdrop-blur backdrop-brightness-75 rounded-xl shadow-lg text-center space-y-5 "
                style={{}}
            >

                <div className="text-white text-4xl md:text-5xl font-bold">Unauthenticated</div>

                <div className="text-white text-xl font-bold">Please Login</div>

                <div className="h-40 flex justify-center items-center">
                    <Link to="/signin" className="px-12 py-5 max-w-fit bg-white rounded-full shadow-xl font-bold text-xl text-stone-600 ease-in-out duration-300 md:hover:cursor-pointer  md:hover:scale-105   md:hover:shadow-2xl">
                        Log in
                    </Link>
                </div>
            </div>
        </div>

    )
}