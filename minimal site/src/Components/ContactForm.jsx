import classes from "./ContactForm.module.css";
import { Form, Outlet, redirect } from "react-router-dom";
const ContactForm = () => {
  return (
    <>
      <Outlet />
      <section className={classes.ContactSection}>
        <div className={classes.contactInfo}>
          <div className={classes.contactSection_one}>
            <h1>CONTACT</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className={classes.contactSection_two}>
            <div>
              <h3>Address</h3>
              <p>SomePlace in Bengaluru , India</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 9981647789</p>
            </div>
            <div>
              <h3>E-Mail</h3>
              <p>yyashsngh@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={classes.mainForm}>
          <h1>CONTACT FORM</h1>
          <Form method="post" className={classes.cform}>
            <label>Your Name</label>
            <br />
            <input type="text" name="your name" required />
            <br />
            <label>Your Phone</label>
            <br />
            <input type="text" required />
            <br />
            <label>Your E-mail</label>
            <br />
            <input type="text" required />
            <br />
            <label>Message</label>
            <br />
            <input type="text" required />
            <br />

            <button type="submit">SEND MESSAGE</button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

export const formSubmitter = async (e) => {
  // e.preventDefault();
  return redirect("..");
};
