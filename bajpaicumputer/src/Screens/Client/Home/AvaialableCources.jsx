import React from "react";
import "./AvaialableCources.css";
import CourceCard from "./CourceCard";
import c1 from "../../../assets/c1.jpeg";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.jpeg";
function AvaialableCources() {
  return (
    <>
      <div className="main_courses_div">
        <h1>Courses We Provide</h1>
        <div className="flex_div_courses">
          <CourceCard
            img={c1}
            course={"Android/Ios Development"}
            des={
              "What is the Android development processAndroid Development Process - Steps Towards Your Business AppThe android app development process is a sum-mean of critical phases. It comprises design, creation, development, and post-development"
            }
          />
          <CourceCard
            img={c2}
            course={"Excel"}
            des={
              "Excel is a spreadsheet program from Microsoft and a component of its Office product group for business applications.Excel is a spreadsheet program from Microsoft and a component of its Office product group for business applications."
            }
          />
          <CourceCard
            img={c3}
            course={"Tally"}
            des={
              "Tally is one of the most popular accounting software in the world and is used by more than 20 lakh businesses across 100 countries today. It helps companies record their day-to-day transactions and helps to analyze business-related data"
            }
          />
          <CourceCard
            img={c4}
            course={"Web Development"}
            des={
              "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience"
            }
          />
        </div>
      </div>
    </>
  );
}

export default AvaialableCources;
