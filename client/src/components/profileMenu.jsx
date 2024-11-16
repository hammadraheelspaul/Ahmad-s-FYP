import { Link } from "react-router-dom"



export default function ProfileMenu({user, setUser, setShowProfileMenu}) {
    return (

        <div className="absolute top-28 right-24 w-60 p-5 bg-gray-900 rounded-lg ">
            <div className=" font-mono font-extrabold text-[16px] text-teal-500 space-y-3">
                <div className="flex justify-between">
                    <div>{user.name}</div>
                    <div onClick={()=>{setShowProfileMenu(false)}} className="bg-slate-300 text-gray-900 flex justify-center items-center h-5 aspect-square rounded-full hover:bg-teal-500 hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">X</div>
                </div>
                <div className="bg-teal-500 text-gray-900 rounded-lg py-1 text-center hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">My Projects</div>
                <div className="bg-teal-500 text-gray-900 rounded-lg py-1 text-center hover:scale-105 hover:cursor-pointer transition duration-200 ease-in-out">Backed Projects</div>
                
                <div className="flex justify-end pt-3">

                <button
                    className=" text-gray-900 bg-teal-500 rounded-lg py-1 px-2 hover:bg-red-500 hover:scale-105 transition duration-200 ease-in-out"
                    onClick={() =>{setShowProfileMenu(false), setUser(null)}}
                    >
                    Sign Out
                </button>
                    </div>
            </div>
        </div>
    )
}