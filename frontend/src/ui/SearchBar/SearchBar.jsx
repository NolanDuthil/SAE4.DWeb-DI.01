import { ArrowBack, Search } from "../Icons/Icons"

export default function SearchBar({ toggleSearchBar }) {

    return (
        <div className="flex items-center bg-forground p-2 w-full z-10">
            <button onClick={toggleSearchBar}>
                <ArrowBack/>
            </button>
            <div className="flex items-center bg-forground p-2 flex-grow">
                <input className="bg-transparent border-solid border-2 border-background rounded-md p-1 pl-2 placeholder-gray-500 flex-grow w-full" type="text" placeholder="Rechercher..." />
            </div>
            <button className="w-8" onClick={toggleSearchBar}>
                <Search className="text-background"/>
            </button>
        </div>
    )
}