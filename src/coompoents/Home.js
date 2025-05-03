import data from './Productdata'
import{useState}from 'react'
import Productt from'./product'
export default function Home(){
   const[products]=useState(data)
   return(
<div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 gap-x-0.5">
{products.map((items) => (
  <Productt key={items.id} things={items} />
))}
</div>
   )
}