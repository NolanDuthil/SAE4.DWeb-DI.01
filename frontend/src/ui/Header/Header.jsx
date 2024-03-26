import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

export default function Header() {

    return (
        <>
            <NavBar />
            <div className="flex items-center flex-col gap-5 bg-no-repeat bg-cover bg-header-bg pb-5">
                <h1 className="text-forground text-center items-center justify-center mt-32 text-4xl font-bold">Découvrez le cinéma qui change tout</h1>
                <h2 className="text-forground text-center items-center justify-center font-semibold text-xl">Avec notre abonnement, accédez à des chefs-d’œuvre, des classiques,<br></br> du cinéma indépendant, des séries exclusives, des documentaires et bien plus encore.</h2>
                <div className="flex items-center flex-col gap-3">
                    <a className="text-forground text-center items-center justify-center font-semibold text-lg">Pour commencer votre abonnement, entrez votre email ici</a>
                    <input className="bg-background border-2 border-solid rounded-md border-forground/50 max-w-80 w-full h-10 text-forground checked:border-button"></input>
                    <Button>Comenzar</Button>
                    <a className="text-forground/50 text-center items-center justify-center font-semibold">Plus de 10.000 films et séries. Annulez quand vous voulez.</a>
                </div>
            </div>
        </>


    )
}