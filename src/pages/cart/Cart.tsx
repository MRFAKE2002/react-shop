// components
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";

// context functions
import { useCartContextValues } from "../../context/CartContext";

function Cart() {
  /*
    baraye gereftan 'value' az context bayad az 'useContext' estefade konim va esm oun 'context' ke mikhaim seda bezanim va ba estefade
    az 'destructuring' be oun 'value' hayi ke mikhaim dastresi dashte bashim.

    ama baraye tamiz tar budan code mitunim az 'useCartContextValues function' estefade konim.
  */
  const { cartItems } = useCartContextValues();

  return (
    <Container>
      {cartItems.length > 0 ? (
        <>
          <div>
            {/* 
            dar inja az 'list state cartItems' estefade mikonim va 'method map' ro seda mizanim ta baraye ha 'object product' dakhel 'list' az 'CartItem component'
            estefade konim va namayesh bedim.
            hala mikhaim maghadir har 'object' shamel 'id va quantity' ro be 'CartItem' be onvan props pas bedim.
          */}
            {cartItems.map((item) => (
              <CartItem {...item} />
            ))}
          </div>
          <div className="bg-gray-300 text-right my-5 p-5">
            <h2>قیمت کل: 2,000</h2>
            <h2 className="my-2">تخفیف شما: 2,00</h2>
            <h2>قیمت نهایی: 1,800</h2>
          </div>
          <Button className="px-3 py-3 rounded-lg" variant="success">
            ثبت سفارش
          </Button>
        </>
      ) : (
        <Link to="/store" >
          <h2 className="flex justify-center items-center h-96">سبد خرید خالی است!!! لطفا به فروشگاه بروید.</h2>
        </Link>
      )}

      
    </Container>
  );
}

export default Cart;
