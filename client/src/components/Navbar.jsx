import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.link}>E-Shop</Link>
      <Link to="/cart" style={styles.link}>Cart ({cartCount})</Link>
    </div>
  );
}

const styles = {
  container: {
    padding: "15px",
    background: "#0C3866",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "20px"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  }
};
