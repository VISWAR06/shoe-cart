
export default function product({things}){
    return (
        <div >
<div className="border  border-violet-700 bg-white h-100 w-full text-center">
    <img src={things.image} alt="iamge"
    className="h-80 w-full"
    />
   <h3>{things.name}</h3>
   <p>price:${things.amount}</p>
   <button className="rounded-md bg-black text-white hover:bg-black hover:text-yellow-500 ">Add Cart</button>
    
</div>
    </div>
   
    )
}