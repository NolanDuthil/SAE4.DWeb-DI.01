import Button from "../Button/Button";

export default function Cardhover() {
    return (
        <div className="flex flex-col items-center bg-background border-solid border-1 border-forground/50 bg-center p-5">
            <div className="bg-green-500 text-white p-2 rounded-full w-20 text-center mt-5">
                <span className="text-2xl">8</span>
                <p className="text-xs">16573 votos</p>
                <p className="text-xs">Estupenda</p>
            </div>
            <Button>Suscribete</Button>
            <h1 className="text-white text-2xl mt-5">Vidas Pasadas</h1>
            <p className="text-white text-sm">1h 46min 7+</p>
            <p className="text-white text-sm">ROMÁNTICA DRAMA</p>
            <p className="text-white mt-5">Con dos nominaciones a los Óscar, es el fenómeno que ha cautivado al público. Una historia de separaciones, reencuentros y amores que jamás debieron ser interrumpidos.</p>
        </div>
    )
}