import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItems, getcurrentQuantityId } from "../cart/cartSlice";
import DeleteItems from "../cart/DeleteItems";
import UpdateQuantity from "../cart/UpdateQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getcurrentQuantityId(id));
  const InCart = currentQuantity > 0;
  function handleAdditems() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: 1 * unitPrice,
    };
    dispatch(addItems(newItem));
  }
  return (
    <li className=" flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className=" flex flex-grow flex-col">
        <p className=" font-medium">{name}</p>
        <p className=" text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className=" mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className=" text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className=" text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {InCart && (
            <div className=" flex items-center gap-3 sm:gap-8">
              <UpdateQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItems pizzaId={id} />
            </div>
          )}
          {!soldOut && !InCart && (
            <Button onClick={handleAdditems} type="small">
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
