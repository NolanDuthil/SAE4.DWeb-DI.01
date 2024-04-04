import { Link } from 'react-router-dom';

export default function CardSearch({ data }) {
    return (
        <Link to={`/film/${data.id}`}>
            <div className="w-[34rem] rounded-md relative h-56">
                <img src={`/img/${data.img}`} alt="" className="absolute inset-0 w-full h-full object-cover rounded-md" />
                <h2 className="p-5 bottom-0 left-0 text-2xl text-forground absolute z-10">{data.name}</h2>
            </div>
        </Link>
    )
}