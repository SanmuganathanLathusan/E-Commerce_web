import ProductCard from "../components/ProductCard";
import { products } from "../data";

export default function Home() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((p) => (
        <ProductCard key={p.id} item={p} />
      ))}
    </div>
  );
}
