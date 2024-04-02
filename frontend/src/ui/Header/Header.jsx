import Button from "../Button/Button";
import NavBar from "../NavBar/NavBar";

export default function Header() {

    return (
        <>
            <div className="relative flex items-center flex-col gap-5 pb-5 bg-header bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <h1 className="z-10 text-forground text-center items-center justify-center mt-32 text-4xl font-bold">Découvrez le cinéma qui change tout</h1>
                <h2 className="z-10 text-forground text-center items-center justify-center font-semibold text-xl">Avec notre abonnement, accédez à des chefs-d’œuvre, des classiques,<br></br> du cinéma indépendant, des séries exclusives, des documentaires et bien plus encore.</h2>
                <div className="z-10 flex items-center flex-col gap-3">
                    <a className="text-forground text-center items-center justify-center font-semibold text-lg">Pour commencer votre abonnement, entrez votre email ici</a>
                    <input className="bg-background p-2 border-2 border-solid rounded-md border-forground/50 max-w-80 w-full h-10 text-forground focus:border-button outline-none" placeholder="Entrer email"></input>
                    <Button>S'inscrire</Button>
                    <a className="text-forground/50 text-center items-center justify-center font-semibold">Plus de 10.000 films et séries. Annulez quand vous voulez.</a>
                </div>
            </div>
        </>


    )
}