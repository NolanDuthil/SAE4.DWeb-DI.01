import Button from "../../components/Button";

export default function MenuBurger(){
    return(
        <>
        <div className="flex justify-around flex-nowrap z-10">
            <Button></Button>
            <Button intent="secondary"></Button>
        </div>
        </>
    )
}