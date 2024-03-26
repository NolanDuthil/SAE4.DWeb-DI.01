export async function loader({params}) {
    let response = await fetch("http://localhost:8080/api/movie/1");
    let data = await response.json();
}

export default function Movie(props){
    return (
        <section>
            <Card/>
        </section>
    )
}