import NavBar from "../ui/NavBar/NavBar";
import Card from "../ui/Card/Card"
import { Outlet } from "react-router-dom";
import Button from "../ui/Button/Button";
import Header from "../ui/Header/Header";
import Cardhover from "../ui/Card/Cardhover";

export default function Root() {

  return (
    <>
      <section className="bg-background h-screen">
        <Header />
        <Card></Card>
      </section>
    </>
  );
}
