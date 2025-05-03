import Img1 from '../Assets/one.jpg';
import Img2 from '../Assets/two.jpg';
import Img3 from '../Assets/three.jpg';
import Img4 from '../Assets/four.jpg';
import Img5 from '../Assets/five.jpg';
import Img6 from '../Assets/six.jpg';
import Img7 from '../Assets/seven.jpg';
import Img8 from '../Assets/eight.jpg';
import Img9 from '../Assets/nine.jpg';
import Img10 from '../Assets/ten.jpg';
import Img11 from '../Assets/ele.jpg';
import Img12 from '../Assets/twe.jpg';
import { useCart } from '../../../context/context';

const products = [
  { id: 1, name: 'Nike Air Force 1`07', amount:'$120', image:Img1},
  { id: 2, name: 'Nike Air Max Dn8 white', amount: '$240', image:Img2 },
  { id: 3, name: 'Nike Air Max Dn8 blue', amount: '$240' , image:Img3},
  { id: 4, name: 'Nike Air Max Dn8 purple', amount: '$240' , image:Img4},
  { id: 5, name: 'Nike Air Max Dn8 ornage', amount: '$240' , image:Img5},
  { id: 6, name: 'Nike Air Max Dn8 green', amount: '$240' , image:Img6},
  { id: 7, name: 'Nike Air Vaporfly 7', amount: '$90' , image:Img7},
  { id: 8, name: 'Nike Air Nen 2', amount: '$100' , image:Img8},
  { id: 9, name: 'Nike Air Jordan #', amount: '$60' , image:Img9},
  { id: 10, name: 'Nike Tiempo Legend 10 ', amount: '$70' , image:Img10},
  { id: 11, name: 'Nike Air Initiator ', amount: '$99' , image:Img11},
  { id: 12, name: 'Nike Pegasus', amount: '$200' , image:Img12},
];

export default function Cart() {
  const {addToCart}=useCart()
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-5'>
        {products.map((prod) => (
          <div key={prod.id} className='border border-gray-600 text-white  flex flex-col justify-end'>
           
            {prod.image && (
              <img
                src={prod.image}
                alt={prod.name}
                className=""
              />
            )}

            <div className="mb-3 px-2">
              <h1 className="mb-2">{prod.name}</h1>
              <p className="mb-3">{prod.amount}</p>
              <button  onClick={() => addToCart(prod)}
              className="border border-white rounded-sm hover:bg-yellow-400 hover:text-white bg-white text-black transition-colors">
                Add cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
