import Button from "../Button/Button";

export default function Cardhover() {
    return (
        <div className="bg-bgCard rounded-lg w-full h-96 border-solid border-2 mb-2 border-forground/20 flex flex-col gap-2">
            <div className="bg-header w-full h-44 bg-cover bg-center"></div>
            <div className="mx-2 flex flex-col gap-2">
                <Button className="">Voir</Button>
                <h2 className="text-forground">Vidas Pasadas</h2>
                <h2 className="text-forground">1h 46min</h2>
            </div>
            <div className="flex flex-row gap-2 ml-2">
                <Button intent="categories" size="categories">Romantique</Button>
                <Button intent="categories" size="categories">Drama</Button>
            </div>
            <a className="text-forground mx-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis doloribus, dolores accusantium officiis neque provident nam adipisci rerum quia eligendi quis omnis cumque ipsa voluptate minus eum deleniti voluptates a.</a>
        </div>
    )
}