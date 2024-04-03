import React from "react"
import Button from "../Button/Button";

export default function FilmPage({ data }) {
    return (
        <>
            <div className="relative top-20 h-[20rem] md:h-[50rem]">
                <video className="absolute inset-0 w-full h-[20rem] object-cover md:h-[50rem]" src={`/video/${data.video}`} autoPlay muted loop>
                </video>
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background h-[20rem] md:h-[50rem] "></div>
                <div className="absolute bottom-0 left-0 flex flex-col max-w-[35rem] gap-10 p-10 z-10">
                    <div className="flex flex-row w-[10rem] md:w-[30rem]">
                        <img src={`/img/${data.img}`} alt="" className="w-full" />
                        <div className="flex flex-col justify-center pl-5">
                            <h2 className="text-forground text-4xl w-[50rem]">{data.name}</h2>
                            <h2 className="text-forground text-xl mt-2">{data.duree}</h2>
                        </div>
                    </div>
                    <Button className="w-2/3">Voir</Button>
                </div>
            </div>
            <div className="flex items-center mt-32 pb-5 flex-col md:flex-row w-full gap-10 px-10">
                <div className="rounded-md bg-bgIcon w-1/2 w-[40rem] md:w-full h-full p-5 flex flex-col gap-5">
                    <h2 className="text-forground/40 text-4xl">Synopsis</h2>
                    <h2 className="text-forground text-md">{data.description}</h2>
                </div>
                <div className="rounded-md bg-bgIcon flex w-[40rem] md:w-full h-[12rem] justify-center flex-col gap-5 w-1/2 p-5">
                    <h2 className="text-forground/40 text-4xl">Catégories</h2>
                    <div className="flex flex-row gap-3">
                        {data.category.map((category, index) => (
                            <h2 className="text-forground text-md">{category.name}</h2>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}