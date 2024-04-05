
import ListResult from "../ui/List/ListResult";

export default function SearchPage() {

    return (
        <div>
            {isLoading ? 'Chargement...' : <ListResult results={results} />}
        </div>
    )
}