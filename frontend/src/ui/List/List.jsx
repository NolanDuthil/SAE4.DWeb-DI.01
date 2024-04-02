import { useLoaderData } from "react-router-dom";
import { fetchMovies } from "../../lib/loaders";
import Card from "../Card/Card";


export async function loader(){
    return await fetchMovies();
}

export default function List() {
    const data = useLoaderData();
    return (
        <div className="mt-10 mx-12">
            <h1 className="text-forground text-2xl font-bold">Film</h1>
            <div className=" mt-5 flex flex-row gap-5">
                {data.map((movie, index) => (
                    <Card key={index} data={movie}/>
                ))}
            </div>
        </div>
    );
}