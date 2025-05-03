import { useState } from "react"

export default function Cart({cart,setCart}){
    const [total,setTotal]=useState(0)
    return(
    <>
    <h1>Cart Products</h1>
    <div>
        {
            cart.map((product)=>(
                <div key={product.id}>
                    <div>
                    <img src={product.image}/>
                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.amount}</p>
                    </div>
                    </div>
                    </div>
               
            )
        )
        }
    </div>
    </>
    )
}