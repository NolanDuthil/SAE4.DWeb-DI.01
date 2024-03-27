import Card from "../Card/Card";

export default function List() {
    return (
        <div className="mt-10 mx-12">
            <h1 className="text-forground text-2xl font-bold">Film</h1>
        <div className=" mt-5 flex flex-row gap-5">
            <Card />
            <Card/>
            <Card/>
            </div>
            </div>
    )
}