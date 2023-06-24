import classes from "./Products.module.css";
import pic1 from "../assets/picone.jpg";
import pic2 from "../assets/pictwo.jpg";
import pic3 from "../assets/picthree.jpg";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className={classes.main}>
        <div className={classes.images}>
          <img src={pic1} />
          <img />
          <img src={pic3} />
        </div>
        <div>
          <img src={pic2} className={classes.two} />
        </div>
        <div className={classes.productsHeading}>
          <h1>PRODUCTS</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
          <button>View Product</button>
        </div>
      </section>
      <Outlet />
    </>
  );
};
export default Products;
