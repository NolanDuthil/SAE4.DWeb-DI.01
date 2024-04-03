import Card from "../Card/Card";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function List({data}) {
    return (
        <div className="mt-10 mx-12">
            <h1 className="text-forground text-2xl font-bold">Film</h1>
            <Carousel className="mt-5">
                {data.map((movie, index) => (
                    <div key={index}>
                        <Card data={movie}/>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}