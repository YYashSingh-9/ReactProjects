import classes from "./Li.module.css";
import { useDispatch } from "react-redux";
import { StoreActions } from "../../Store/CartSlice";

const Li = (props) => {
  const dispatch = useDispatch();
  const { qt, id, img, name, price } = props;

  const addItemHandler = () => {
    dispatch(StoreActions.addItemToCartHandler({ qt, id, img, name, price }));
  };

  return (
    <li key={props.id} className={classes.listItem}>
      <div className={classes.imgDiv}>
        <img src={props.img} />
      </div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <button onClick={addItemHandler}>Add To Cart</button>
    </li>
  );
};

export default Li;
