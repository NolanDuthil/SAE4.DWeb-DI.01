import React from "react";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { fetchAddPlaylist, fetchRemovePlaylist, fetchPlaylist } from "../../lib/loaders";
import { useLoaderData } from "react-router-dom";

export default function FilmPage({ data }) {
    const [playlist, setPlaylist] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetchPlaylist();
            setPlaylist(data);
            setLoading(false);
        };

        fetchData();
    }, []);

    const handlerAdd = async (id) => {
        await fetchAddPlaylist({ id });
        let data = await fetchPlaylist();
        setPlaylist(data);
    }

    const handlerRemove = async (id) => {
        await fetchRemovePlaylist({ id });
        let data = await fetchPlaylist();
        setPlaylist(data);
    }

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="relative h-[19rem] md:h-[38rem]">
                        <video className="absolute inset-0 w-full h-[17rem] object-cover md:h-[38rem]" src={`/video/${data.video}`} autoPlay muted loop>
                        </video>
                        <div className="absolute bottom-0 left-0 flex flex-col max-w-[35rem] gap-10 p-10 z-10">
                            <div className="flex flex-row h-[5rem] md:h-[15rem] w-[10rem] md:w-[30rem]">
                                <img src={`/img/${data.img}`} alt="" className="h-full w-full" />
                                <div className="flex flex-col justify-center pl-5">
                                    <h2 className="text-forground text-4xl w-[50rem]">{data.name}</h2>
                                    <h2 className="text-forground text-xl mt-2">{data.duree}</h2>
                                </div>
                            </div>
                            {playlist && (
                                <Button className="w-[20rem]"
                                    onClick={() => playlist.some(movie => movie.id === data.id) ? handlerRemove(data.id) : handlerAdd(data.id)}
                                >
                                    {playlist.some(movie => movie.id === data.id) ? 'Supprimer' : 'Ajouter'}
                                </Button>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center mt-20 pb-5 flex-col md:flex-row w-full gap-10 px-10">
                        <div className="rounded-md bg-bgIcon w-1/2 w-[40rem] md:w-full h-full p-5 flex flex-col gap-5">
                            <h2 className="text-forground/40 text-4xl">Synopsis</h2>
                            <h2 className="text-forground text-md">{data.description}</h2>
                        </div>
                        <div className="rounded-md bg-bgIcon flex w-[40rem] md:w-full h-[12rem] justify-center flex-col gap-5 w-1/2 p-5">
                            <h2 className="text-forground/40 text-4xl">Catégories</h2>
                            <div className="flex flex-row gap-3">
                                {data.category.map((category, index) => (
                                    <h2 className="text-forground text-md" key={index}>{category.name}</h2>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}