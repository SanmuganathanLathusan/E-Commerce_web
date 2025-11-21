export default function Cart({ cart }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={styles.row}>
            <img src={item.image} alt="" style={{ width: 60 }} />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  row: {
    border: "1px solid #ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    gap: 20
  }
};
