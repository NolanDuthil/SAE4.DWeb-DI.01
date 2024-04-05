import NavBar from "../ui/NavBar/NavBar";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchUser } from "../lib/loaders";

export async function loader() {
  return await fetchUser();
}


export default function Root() {
  const data = useLoaderData();

  return (
    <>
      <section className="bg-background min-h-screen ">
        <NavBar user={data} />
        <div className="">
          <Outlet />
        </div>
      </section>
    </>
  );
}
