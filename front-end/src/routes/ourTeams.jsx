import { Await, defer, useLoaderData } from "react-router-dom";
import Teams from '../ui/Team';
import { fetchOurTeams, fetchTestimonialData } from "../lib/loaders";
import Testimonial from "../ui/Testimonial";
import { Suspense } from 'react';
import TeamSkeleton from "../ui/Team/TeamSkeleton"

export async function loader({ params }) {
    let teamData = fetchOurTeams(params.teamName);
    let testiData = await fetchTestimonialData(params.teamName);
    return defer({ team: teamData, testimonial: testiData });
}

export default function OurTeams() {

    const data = useLoaderData();

    return (
        <>
            <Suspense fallback={<TeamSkeleton />}>
                <Await resolve={data.team} errorElement={<div>Failed</div>} >
                    {teamData => <Teams {...teamData} />}
                </Await>
            </Suspense>
            <Testimonial data={data.testimonial} />
        </>
    )
}