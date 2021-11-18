import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { CartContext } from "../context/CartContext";
import BtnBack from "./BtnBack";

const ItemCount = ({ stock, id, item }) => {
  const [count, setCount] = useState(0);
  const [showCount, setShowCount] = useState(true);
  const { onAdd } = useContext(CartContext);

  const addItem = () => {
    if ((stock >= 1) & (count < stock)) {
      return count + 1;
    } else {
      return count;
    }
  };

  const removeItem = () => {
    return count <= 0 ? 0 : count - 1;
  };

  return (
    <div>
      {showCount ? (
        <>
          <div className="">
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button onClick={() => setCount(removeItem)}>-</Button>{" "}
              <span className="count"> {count} </span>
              <Button onClick={() => setCount(addItem)}>+</Button>
            </ButtonGroup>
            <Button
              variant="primary"
              onClick={() => {
                onAdd(count, id, item);
                setShowCount(false);
              }}
            >
              AGREGAR
            </Button>
          </div>
        </>
      ) : (
        <>
          <BtnBack />
          <Link to="/cart">Finalizar compra</Link>
        </>
      )}
    </div>
  );
};

export default ItemCount;
