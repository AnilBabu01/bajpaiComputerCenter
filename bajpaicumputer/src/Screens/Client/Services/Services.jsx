import React from "react";
import ServiceCard from "./ServiceCard";
import s1 from "../../../assets/s1.png";
import s2 from "../../../assets/s2.png";
import s3 from "../../../assets/s3.png";
import s4 from "../../../assets/s4.png";
import s5 from "../../../assets/s5.png";
import s6 from "../../../assets/s6.png";
import "./Services.css";
function Services() {
  return (
    <div className="main_courses_div">
      <p className="main_courses_divp">---OUR SERVICES---</p>
      <h1>Solutions We Provide</h1>
      <div className="flex_div_courses">
        <ServiceCard title={"Web Design"} img={s4} />
        <ServiceCard title={"Android Develpoment"} img={s2} />
        <ServiceCard title={"IOS Develpoment"} img={s1} />
        <ServiceCard title={"Bulk Sms Services"} img={s3} />
        <ServiceCard title={"Consulting Services"} img={s5} />
        <ServiceCard title={"Web Hosting"} img={s6} />
      </div>
    </div>
  );
}

export default Services;
