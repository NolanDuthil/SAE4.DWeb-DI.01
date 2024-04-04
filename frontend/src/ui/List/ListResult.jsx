import CardSearch from "../Card/CardSearch";

export default function ListResult({ results })
 {
    return (
        <div className="flex overflow-hidden my-10 mx-7">
            <ul className="flex gap-2 flex-nowrap">
                {results.map((movie, index) => (
                    <CardSearch key={index} data={movie} />
                ))}
            </ul>
        </div>
    );
}