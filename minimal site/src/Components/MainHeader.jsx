import classes from "./MainHeader.module.css";
import logo from "../assets/logo2.png";
import { FaGoogle, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//SCROLL INDICATORS OF EVERY PAGE
const ContactScroller = () => {
  return (
    <>
      <BsArrowLeft className={classes.arrows} />
      <p>SCROLLBAR</p>
    </>
  );
};

const ProductScroller = () => {
  return (
    <>
      <BsArrowLeft className={classes.arrows} />
      <p>SCROLLBAR</p>
      <BsArrowRight className={classes.arrows} />
    </>
  );
};

const TitleScroller = () => {
  return (
    <>
      <BsArrowLeft className={classes.arrows} />
      <p>SCROLLBAR</p>
      <BsArrowRight className={classes.arrows} />
    </>
  );
};

//MAIN HEADER
const MainHeader = () => {
  // location to get current route and as per that showing scroll indicators
  const location = useLocation();
  let currPath = location.pathname;
  const [state, setState] = useState(currPath);

  //setting current state to the current route everytime a page changes and re-executes the code
  useEffect(() => {
    setState(currPath);
  }, [currPath]);

  return (
    <>
      <section className={classes.header}>
        <div className={classes.logo}>
          <NavLink to={".."}>
            <img src={logo} />
          </NavLink>
        </div>
        <div className={classes.clicks}>
          <span>
            <p>
              <NavLink to={"/products"}>PRODUCTS</NavLink>
            </p>
          </span>
          <span>
            <p>
              <NavLink to={"/contact"}>CONTACTS</NavLink>
            </p>
          </span>
        </div>
      </section>
      <div className={classes.socials}>
        <NavLink to={"https://www.google.com/"}>
          <FaGoogle className={classes.icons} />
        </NavLink>
        <NavLink to={"https://www.youtube.com/"}>
          <FaYoutube className={classes.icons} />
        </NavLink>
        <NavLink to={"https://www.instagram.com/yyashsingh_/"}>
          <FaInstagram className={classes.icons} />
        </NavLink>
        <NavLink to={"https://www.linkedin.com/"}>
          <FaLinkedin className={classes.icons} />
        </NavLink>
      </div>
      <div className={classes.scroll_bar}>
        {state === "/contact" && <ContactScroller />}
        {state === "/products" && <ProductScroller />}
        {state === "/" && <TitleScroller />}
      </div>
    </>
  );
};

export default MainHeader;
