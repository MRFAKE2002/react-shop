// components
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

// context
import { useCartContextValues } from "../../context/CartContext";

function Cart() {
  /*
    baraye gereftan 'value' az context bayad az 'useContext' estefade konim va esm oun 'context' ke mikhaim seda bezanim va ba estefade
    az 'destructuring' be oun 'value' hayi ke mikhaim dastresi dashte bashim.
  */
  // const { cartItems, handleIncreaseProductIntoCart } = useCartContextValues()


  return (
    <Container>
      <div>
        <div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className="bg-gray-300 text-right my-5 p-5">
          <h2>قیمت کل: 2,000</h2>
          <h2 className="my-2">تخفیف شما: 2,00</h2>
          <h2>قیمت نهایی: 1,800</h2>
        </div>
        <Button className="px-3 py-3 rounded-lg" variant="success">
          ثبت سفارش
        </Button>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </Container>
  );
}

export default Cart;
