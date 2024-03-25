import NavBar from "../ui/NavBar/NavBar";
import Card from "../components/Card"
import { Outlet } from "react-router-dom";
import Button from "../components/Button";

export default function Root() {

  return (
    <>
      <section className="bg-background h-screen">
        <NavBar />
      </section>
    </>
  );
}
