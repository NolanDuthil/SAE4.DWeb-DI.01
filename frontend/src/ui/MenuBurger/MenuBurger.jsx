import Button from "../Button/Button";

export default function MenuBurger({ isActive }) {

    const classActive = isActive ? "translate-x-0" : "-translate-x-full"


    return (

        <div className={`flex flex-col gap-4 w-full max-w-72 z-20 fixed top-0 bottom-0 left-0 bg-bgSelectCat pt-16 p-4 ${classActive} md:flex-row md:static md:translate-x-0 md:bg-transparent md:p-0 md:justify-center md:items-center`}>
            <Button>Suscribete</Button>
            <Button intent="secondary">Iniciar Sesion</Button>
            <a className="text-forground">Film</a>
            <a className="text-forground">Series</a>
        </div>

    )
}