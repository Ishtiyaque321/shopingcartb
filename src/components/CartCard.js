
import "./CartCard.css";
export const CartCard = (product) => {
    const [name,price,image]=product;
  return (
    <div>
<img  src= {image} alt={name}/>
<p className="ProductName">{name}</p>
    <p className="ProdctPrice">{price}</p>
    <button>Add to Cart</button>

    </div>
  );
}
