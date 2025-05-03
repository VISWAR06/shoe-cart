import { useEffect, useState } from "react";

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amount), 0));
  }, [cart]);

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Products</h2>
      <div>
        {cart.map((product) => (
          <div key={product.id} className="border border-violet-600 h-32 w-full mb-4 p-2 flex items-center gap-4">
            <img src={product.image} alt={product.name} className="h-full w-auto object-cover" />
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>Price: ${product.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 font-bold text-lg">Total: ${total}</div>
    </div>
  );
}
