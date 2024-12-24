import Search from "./Search";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";

const TopNav = () => {
    const handleSearch=()=>{

    }
  return (
    <div className="w-full h-16 flex items-center bg-white/10 justify-between shadow shadow-gray-300/40 px-10">
        <h1 className="text-gray-300 text-3xl font-bold">LOGO</h1>
        <Search placeholder="search any Task..." handleSearch={handleSearch}/>
        <div className="flex gap-3">
        <button className="bg-primary text-white p-2 rounded-md">
            <IoNotificationsOutline/>
        </button>
        <button className="bg-primary text-white p-2 rounded-md">
            <IoCalendarOutline/>
        </button>
        </div>
        <div className="flex flex-col text-gray-300">
            <h1 className="font-semibold text-lg">Tuesday</h1>
            <p className="text-primary/70 text-sm">26/06/2024</p>
        </div>
    </div>
  )
}

export default TopNav
