
import { MdOutlineShoppingBag } from "react-icons/md";
import {Link}from 'react-router-dom'
const Heeader = () => {
  return (
    <div>
    <div className="font-bold bg-black border-b border-white text-white w-full h-12 flex justify-between py-3">
    <Link to={'/'}>Shoes shop cart</Link>
    <div className="hover:text-yellow-400">
      <Link to={"/cart"}>
      <MdOutlineShoppingBag size={24} />
      </Link>
      </div>
    
    
            </div>
            </div>
  )
}

export default Heeader
