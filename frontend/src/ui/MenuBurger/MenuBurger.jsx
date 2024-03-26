import Button from "../Button/Button";

export default function MenuBurger({ isActive }) {

    const classActive = isActive ? "translate-x-0" : "-translate-x-full"


    return (
        <div className={`flex flex-col gap-4 w-full max-w-72 fixed top-0 bottom-0 left-0 bg-bgSelectCat pt-16 p-4 ${classActive} md:flex-row md:static md:translate-x-0 md:bg-transparent md:p-0 md:justify-center md:items-center`}>
            <Button className="order-1 md:order-3">Suscribete</Button>
            <Button className="order-2 md:order-4 whitespace-nowrap" intent="secondary">Iniciar Sesion</Button>
            <a className="order-3 md:order-1 text-forground">Film</a>
            <a className="order-4 md:order-2 text-forground">Series</a>
        </div>
    )

}