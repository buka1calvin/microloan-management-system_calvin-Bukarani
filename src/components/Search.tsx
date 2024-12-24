import { IoSearchOutline } from "react-icons/io5";

interface searchProps{
    placeholder:string,
    handleSearch:()=>void
}
const Search = ({placeholder,handleSearch}:searchProps) => {
  return (
    <div className="h-9 relative w-full max-w-[695px] overflow-hidden rounded-md shadow shadow-gray-300/50">
        <input type="text" placeholder={placeholder} className="w-full text-gray-700 text-xs font-normal px-2 py-1 h-full bg-stone-600" />
        <button className="text-orange-50 absolute right-0 top-0 bottom-0 bg-green-500 flex items-center justify-center h-full w-9">
            <IoSearchOutline onClick={handleSearch} className='text-white'/>
        </button>
    </div>
  )
}

export default Search
