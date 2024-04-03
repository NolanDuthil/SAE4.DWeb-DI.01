import Card from "../Card/Card";

export default function ListResult({ results })
 {
    if (!results || results.length === 0) {
        return <div className='flex items-center justify-center mt-10 mx-7'>Aucun résultat trouvé</div>;
    }

    return (
        <div className="flex overflow-hidden my-10 mx-7">
            <ul className="flex gap-2 flex-nowrap">
                {results.map((movie, index) => (
                    <Card key={index} data={movie} />
                ))}
            </ul>
        </div>
    );
}