import React from "react";
import { fetchCat, fetchSearch } from "../lib/loaders";
import { useLoaderData } from "react-router-dom";
import FilmSelect from "../ui/Film/FilmSelect";
import List from "../ui/List/List";

export async function loader(){
    return await fetchSearch();
}

export default function Select() {
    const data = useLoaderData();
    return (
        <>
            <section className="bg-background h-screen">
                <FilmSelect data={data}/>
                <List data={data}/>
            </section>
        </>
    )
}