import { Link } from "react-router-dom";
import admins from '../data/admins';


export default function ProfileMenu({ user, setUser, setShowProfileMenu }) {

    return (

        <div className="absolute top-28 right-24 w-80 p-5 bg-gray-900 rounded-lg ">
            <div className=" font-mono font-extrabold text-[16px] text-teal-500 space-y-3 space-x-3">
                <div className="flex justify-between">
                    <div>{user.name}</div>
                    <div onClick={() => { setShowProfileMenu(false) }} className="bg-slate-300 text-gray-900 flex justify-center items-center h-5 aspect-square rounded-full hover:bg-teal-500 hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">X</div>
                </div>

                <Link to={'/myProjects'} className="bg-red-100 mt-3">
                    <div className="bg-teal-500 text-gray-900 rounded-lg py-1 text-center hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">My Projects</div>
                </Link>

                <Link to={'/backedProjects'}>
                    <div className="bg-teal-500 text-gray-900 rounded-lg py-1 text-center hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">Backed Projects</div>
                </Link>

                <div className="flex pt-3">
                    {
                        user && admins.includes(user.email) &&
                        <Link to={'/adminDashBoard'} className=" border border-teal-500  rounded px-2 py-1 text-center hover:scale-105 hover:bg-gray-600">
                            Admin Dashboard
                        </Link>
                    }

                    <button
                        className="ml-auto text-gray-900 bg-teal-500 rounded-lg py-1 px-2 hover:bg-red-500 hover:scale-105 transition duration-200 ease-in-out"
                        onClick={() => { setShowProfileMenu(false), setUser(null) }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    )
}