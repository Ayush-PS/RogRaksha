import React from "react";
import classes from "../Styles/Footer.module.css";
import logo from "../../assets/img/logo.png";
import ImgList from "../Helpers/ImgList";
import FA from "../../assets/img/FA.png";
import IS from "../../assets/img/IS.png";
import LN from "../../assets/img/LN.png";
import X from "../../assets/img/X.png";

const Footer = () => {
  return (
    <div className={classes.footerwrapper}>
      <div className={classes.footer}>
        <div className={classes.logodesc}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.desc}>All your health needs at one place</div>
          <div className={classes.socialmedia}>
            <img className={classes.socialmediaimg} src={FA} alt="facebook" />
            <img className={classes.socialmediaimg} src={IS} alt="instagram" />
            <img
              className={classes.socialmediaimg}
              src={X}
              alt="X"
              style={{ filter: "invert(100%)" }}
            />
            <img className={classes.socialmediaimg} src={LN} alt="linkedin" />
          </div>
        </div>
        <div className={classes.links}>
          <ul className={classes.ul}>
            <ImgList icon={logo} desc={"About"}>
              HealthCare
            </ImgList>
            <ImgList icon={logo} desc={"Medicine"}>
              Medicines
            </ImgList>
            <ImgList icon={logo} desc={"AppointmentForm"}>
              Doctors
            </ImgList>
            <ImgList icon={logo} desc={"Meeting"}>
              Emergency
            </ImgList>
          </ul>
        </div>
        <div className={classes.contactus}>
          <h3>Contact Us</h3>
          <p>Address: 123, abc street, xyz city</p>
          <p>Phone: 1234567890</p>
          <p>Email: rograksha@email.com</p>
        </div>
      </div>
      <div className={classes.otherlinks}>Terms and conditions</div>
    </div>
  );
};

export default Footer;
