import { useParams } from "react-router-dom";
import { products } from "../data";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div style={{ padding: 30 }}>
      <img src={product.image} alt="" style={{ width: 200 }} />
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>

      <button 
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 20px",
          background: "#0C3866",
          color: "#fff",
          borderRadius: 8
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
