export default function SearchBar({isActive}){

    const classActive = isActive? "translate-x-0":"-translate-x-full"

    
    return(

        <div className={`flex flex-col gap-4 w-full max-w-72 fixed top-0 bottom-0 left-0 bg-bgSelectCat pt-16 p-4 ${classActive} md:flex-row md:static md:translate-x-0 md:bg-transparent md:p-0`}>
            
        </div>

    )
}