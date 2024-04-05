import { fetchPlaylist } from "../lib/loaders";
import { useLoaderData } from "react-router-dom";
import React from "react";
import ListPlaylist from "../ui/List/ListPlaylist";


export async function loader(){
    return await fetchPlaylist();
}

export default function Playlist() {
    const data = useLoaderData();
    return (
        <ListPlaylist data={data}/>
    )
}