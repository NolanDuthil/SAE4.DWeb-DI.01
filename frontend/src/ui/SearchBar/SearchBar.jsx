import { ArrowBack, Search } from "../Icons/Icons"
import ListResult from "../List/ListResult";
import { useState } from "react";
import { fetchSearch } from "../../lib/loaders";


export default function SearchBar({ toggleSearchBar}) {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const loader = async () => {
        const result = await fetchSearch({ query });
        console.log(result);
        setResults(result);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loader();
    }

    return (
        <div className="flex flex-col bg-forground w-full">
        <div className="flex items-center justify-center p-2 w-full z-10">
            <button className="text-black" onClick={toggleSearchBar}>
                <ArrowBack />
            </button>
            
            <div className="flex items-center bg-forground p-2 flex-grow">
                <form className="flex w-full px-3.5 items-center" onSubmit={handleSubmit}>
                    <input className="bg-transparent border-solid border-2 border-background rounded-md p-1 pl-2 placeholder-gray-500 flex-grow w-full" type="text" placeholder="Rechercher..." value={query}
                        onChange={e => setQuery(e.target.value)} />
                </form>
            </div>
            <button className="w-8" onClick={toggleSearchBar}>
                <Search className="text-background" />
            </button>
            </div>
            <ListResult results={results}/>
            </div>
    )
}