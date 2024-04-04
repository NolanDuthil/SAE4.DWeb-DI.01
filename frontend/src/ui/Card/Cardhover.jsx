import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function Cardhover({ data }) {
    return (
        <Link to={`/Film/${data.id}`} ><div className="bg-bgCard rounded-lg w-full h-[32rem] border-solid border-2 mb-2 border-forground/20 flex flex-col gap-2">
            <div className="w-full h-44 relative">
                <img src={`/img/${data.img}`} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="mx-2 flex flex-col gap-2">
            <Button className="w-full">Voir</Button>
                <h2 className="text-forground">{data.name}</h2>
                <h2 className="text-forground">{data.duree}</h2>
            </div>
            <div className="flex flex-row gap-2 ml-2">
                {data.category.map((category, index) => (
                    <Button key={index} intent="categories" size="categories">{category.name}</Button>
                ))}
            </div>
            <a className="text-forground mx-2 mb-2">{data.description}</a>
        </div></Link>
    )
}