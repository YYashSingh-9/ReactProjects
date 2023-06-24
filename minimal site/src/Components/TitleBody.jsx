import classes from "./TitleBody.module.css";
import { Outlet } from "react-router-dom";
const TitleBody = () => {
  return (
    <>
      <section className={classes.titleSection}>
        <div className={classes.bodyTitle}>
          <span className={classes.iam}>
            <p>I AM</p>
          </span>
          <h1>YYASH SINGH</h1>
          <div className={classes.jr}>
            <span>
              <p>THE BEST </p>
              <p>WEB DEVELOPER </p>
            </span>
          </div>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default TitleBody;
