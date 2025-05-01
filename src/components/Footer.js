import { FaCopyright } from "react-icons/fa";

export default function footer(){
    const date=new Date().getFullYear()
    return(
        <div className="bg-black h-14 text-white flex justify-center items-center">
           <p className="flex font-bold items-center gap-2"><FaCopyright/>
           Copyrights reseved {date}</p>
        </div>
    )

}