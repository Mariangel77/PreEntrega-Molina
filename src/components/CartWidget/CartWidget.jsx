import cart from "../../assets/cart.svg"

function CardWidget({ cartCount }) {
    return (
      <div>
        <img src={cart} />
      </div>
    );
  }
  
  export default CardWidget