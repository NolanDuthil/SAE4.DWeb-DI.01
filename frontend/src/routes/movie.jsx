import React from "react";
import { fetch1Movie } from "../lib/loaders";
import { useLoaderData } from "react-router-dom";
import FilmPage from "../ui/Card/FilmPage";

export async function loader({ params }) {
    const { id } = params;
    return await fetch1Movie(id);
}

export default function Film() {
    const data = useLoaderData();
    return (
        <>
            <section className="bg-background h-screen">
                <FilmPage data={data}/>
            </section>
        </>
    )
}