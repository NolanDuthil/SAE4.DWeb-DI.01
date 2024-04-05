import { useLoaderData } from "react-router-dom";
import { fetchCatId } from "../lib/loaders";
import ListCategories from "../ui/List/ListCategories";

export async function loader({id}) {
    return await fetchCatId(id);
}

export default function Cat() {
    const data = useLoaderData();
    return (
        <ListCategories data={data}/>
    )
}