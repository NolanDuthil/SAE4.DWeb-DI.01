import NavBar from "../ui/NavBar/NavBar";
import Card from "../components/Card"
import { Outlet } from "react-router-dom";
import Button from "../ui/Button/Button";
import Header from "../ui/Header/Header";

export default function Root() {

  return (
    <>
      <section className="bg-background h-screen">
        <Header />
      </section>
    </>
  );
}
