import React from "react";
import Header from "../ui/Header/Header";
import List from "../ui/List/List";
import { fetchMovies } from "../lib/loaders";
import { useLoaderData } from "react-router-dom";

export async function loader(){
    return await fetchMovies();
}

export default function Home() {
    const data = useLoaderData();

    return (
        <>
            <section className="bg-background h-screen">
                <Header />
                <List data={data}/>
            </section>
        </>
    )
}