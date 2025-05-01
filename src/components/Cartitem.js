const products = [
    { id: 1, name: 'Product 1', amount: '45$' },
    { id: 2, name: 'Product 2', amount: '45$' },
    { id: 3, name: 'Product 3', amount: '45$' },
    { id: 4, name: 'Product 4', amount: '45$' },
    { id: 5, name: 'Product 5', amount: '45$' },
    { id: 6, name: 'Product 6', amount: '45$' },
    { id: 7, name: 'Product 7', amount: '45$' },
    { id: 8, name: 'Product 8', amount: '45$' }
];
export default function cart(){
    return(
        <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5 '>
{
    products.map((prod)=>(
        <div key={prod.id} className='border border-gray-600 text-white h-52 flex flex-col justify-end  '>
            <div className="mb-3">
           <h1 className="mb-2">{prod.name}</h1>
           <p className="mb-3">{prod.amount}</p>
           <button className="border border-whtie rounded-sm hover:bg-yellow-400 hover:text-white bg-white text-black transition-colors">Add cart</button>
           </div>
        </div>
    ))
}
        </div>
        </div>
    )
}