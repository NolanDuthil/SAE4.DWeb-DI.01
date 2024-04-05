import React from "react"
import Button from "../Button/Button";
import { useState } from "react";

export default function FilmPage({ data }) {
    const [inPlaylist, setInPlaylist] = useState(false);

    const handleButtonClick = () => {
        setInPlaylist(!inPlaylist); 
    };

    return (
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
                    <Button className="w-2/3" onClick={handleButtonClick}>
                        {inPlaylist ? 'Supprimer' : 'Ajouter'} {/* Change le texte du bouton en fonction de l'état */}
                    </Button>
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
    )
}