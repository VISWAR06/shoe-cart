
export default function product({things,cart,setCart}){
    const addcart=()=>{
        setCart([...cart,things])
    }
    const removecart=()=>{
setCart(cart.filter((c)=>
    c.id!==things.id
))
    }
    return (
        <div >
<div className="border border-double border-red-700 bg-yellow-300 h-100 w-80 text-center">
    <img src={things.image} alt="iamge"
    className="h-80 w-full"
    />
   <h3>{things.name}</h3>
   <p>price:${things.amount}</p>
   {cart.includes(things)?(<button
   onClick={removecart} className="rounded-md bg-black text-white hover:bg-black hover:text-yellow-500 ">Alredy Cart</button>):
     (<button onClick={addcart} className="rounded-md bg-black text-white hover:bg-black hover:text-yellow-500 ">Add Cart</button>)
   }
  
    
</div>
    </div>
   
    )
}