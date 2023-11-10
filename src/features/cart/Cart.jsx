import Linkbutton from "../../ui/Linkbutton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "./cartSlice";
import EmptyCart from "./EmptyCart";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  // const Cart = fakeCart;
  const username = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;

  return (
    <div className=" px-4 py-3">
      <Linkbutton
        to="/menu"
        className=" text-sm text-blue-500 hover:text-blue-600"
      >
        &larr; Back to menu
      </Linkbutton>

      <h2 className=" mt-7 text-xl font-semibold ">Your cart, {username}</h2>
      <ul className=" mt-3 divide-y divide-slate-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className=" mt-6 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={() => dispatch(clearItems())} type={"secondry"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
