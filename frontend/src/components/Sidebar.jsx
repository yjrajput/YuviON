import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import { Eraser, FileText, Hash, House, Image, LogOut, Scissors, SquarePen, } from "lucide-react";
import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();

    const sideItems = [
        { to: '/ai', lable: 'Dashboard', Icon: House },
        { to: '/ai/write-artical', lable: 'Write Article', Icon: SquarePen },
        { to: '/ai/blog-title', lable: 'Blog Title', Icon: Hash },
        { to: '/ai/generate-images', lable: 'Generate Images', Icon: Image },
        { to: '/ai/remove-background', lable: 'Remove Background', Icon: Eraser },
        { to: '/ai/remove-object', lable: 'Remove Object', Icon: Scissors },
        { to: '/ai/review-resume', lable: 'Review Resume', Icon: FileText },
        { to: '/ai/community', lable: 'Community', Icon: User },
    ]

    return (
        <div
            className={`w-65 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
                } transition-all duration-300 ease-in-out`}
        >
            <div className="my-7 w-full">
                <img
                    src={user?.imageUrl}
                    alt="user avatar"
                    className="w-14 h-14 rounded-full mx-auto object-cover"
                />
                <h1 className="mt-1 text-center">{user?.fullName}</h1>
                <div className="px-6 mt-8 text-sm text-gray-600 font-medium">
                    {sideItems.map(({ to, lable, Icon }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={to === "/ai"} 
                            onClick={() => setSidebar(false)}
                            className={({ isActive }) =>
                                `px-3.5 py-3.5 flex items-center gap-3 rounded transition-colors ${isActive
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                    : "hover:bg-gray-100"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                                    <span>{lable}</span>
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>

            <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between ">
                <div onClick={openUserProfile} className="flex gap-2 items-center justify-between">
                    <img src={user.imageUrl} className="w-8 rounded-full cursor-pointer" alt="user image" />
                    <div>
                        <h1 className="text-sm font-medium">{user.fullName}</h1>
                        <p className="text-xs text-gray-500">
                            <Protect plan='premium' fallback='Free'>Premium</Protect> Plan
                        </p>
                    </div>
                </div>     
                <LogOut onClick={signOut} className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"/> 
            </div>
        </div>
    );
};

export default Sidebar;
