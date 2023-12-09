import React from "react";
import classes from "./About.module.css";

function About() {
  const colors = [
    'url("https://fedscoop.com/wp-content/uploads/sites/5/2021/08/Proofpoint_healthcare_Header.jpg")',
    'url("https://doctery-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2020/11/img-02.jpg")',
    'url("https://th.bing.com/th/id/OIP.2XwoQUX7E0CVRJjq2cn1tAAAAA?w=474&h=355&rs=1&pid=ImgDetMain")',
    'url("https://cipherhealth.com/wp-content/uploads/2021/12/Staff-resilience.jpg")',
    'url("https://doctery-demo.pbminfotech.com/demo1/wp-content/uploads/sites/2/2020/06/blog-02-770x500.jpg")',
    'url("https://accessclinics.org/wp-content/uploads/2015/01/homeparallax-1024x317.jpg")',
  ];

  return (
    <div className={classes.abt}>
      <div className={classes.container}>
        {/* First Row */}
        <div className={classes.row}>
          <div className={classes.jr} style={{ backgroundColor: "white" }}>
            <div className={classes.content}>
              <h3 className={classes.ah}>
                24 hours emergency assistance call us
              </h3>
              <h1 className={classes.bh}>1-800-123-4560</h1>
            </div>
          </div>
          {colors.slice(0, 2).map((color, index) => (
            <div
              key={index}
              className={classes.square}
              style={{ backgroundImage: color }}
            >
              {!(index % 2) && (
                <div className={classes.content}>
                  <h3>Request Appointment</h3>
                  <hr></hr>
                  <p>You can quickly book your appointment as we make all efforts run on time.</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className={classes.row}>
          {colors.slice(2).map((color, index) => (
            <div
              key={index + 2}
              className={classes.square}
              style={{ backgroundImage: color }}
            >
              {(index==1) && <div className={classes.content}>
              <h3>Find the best Doctors</h3>
                  <hr></hr>
                  <p>Highly skilled medical physician with 30 years of experience in clinic.</p>
              </div>}
              {(index==3) && <div className={classes.content}>
              <h3>Our Location Support</h3>
                  <hr></hr>
                  <p>In clinic all locations we commands to give patients have suitable care.</p>
              </div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
