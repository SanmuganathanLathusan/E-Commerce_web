import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div style={styles.card}>
      <img src={item.image} style={styles.img} alt="" />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/product/${item.id}`} style={styles.btn}>
        View Details
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: 20,
    borderRadius: 10,
    width: 200,
    margin: 10,
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: 150,
    objectFit: "cover"
  },
  btn: {
    display: "inline-block",
    padding: "10px 15px",
    marginTop: 10,
    background: "#0C3866",
    color: "#fff",
    borderRadius: 8,
    textDecoration: "none"
  }
};
