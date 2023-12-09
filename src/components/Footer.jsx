import React from "react";
import classes from "./Footer.module.css";
import logo from "../assets/img/logo.png";
import ImgList from "./ImgList";
const Footer = () => {
  //upperpart with form and appoinment
  // side with logo descriptiona nd social media links
  // side with contact us and other links
  // side with links to other pages

  return (
    <div className={classes.footerwrapper}>
      <div className={classes.footer}>
        <div className={classes.logodesc}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div className={classes.desc}>
            This is company we build to show off our talent
          </div>
          <div className={classes.socialmedia}>
            <img
              className={classes.socialmediaimg}
              src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
              alt="facebook"
            />
            <img
              className={classes.socialmediaimg}
              src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt="instagram"
            />
            <img
              className={classes.socialmediaimg}
              src="https://img.icons8.com/ios-filled/50/000000/twitter.png"
              alt="twitter"
            />
            <img
              className={classes.socialmediaimg}
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.png"
              alt="linkedin"
            />
          </div>
        </div>
        <div className={classes.links}>
          <ul>
           <ImgList/>
           <ImgList/>
            <li>Medicines</li>
            <li>Doctors</li>
            <li>Emergency</li>
          </ul>
        </div>
        <div className={classes.contactus}>
          <h3>Contact Us</h3>
          <p>Address: 123, abc street, xyz city</p>
          <p>Phone: 1234567890</p>
          <p>Email:</p>
        </div>
      </div>
      <div className={classes.otherlinks}>Terms and conditions</div>
    </div>
  );
};

export default Footer;
