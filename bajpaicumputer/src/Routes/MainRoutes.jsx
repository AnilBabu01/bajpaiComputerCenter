import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Screens/Client/Header/Navbar";
import Home from "../Screens/Client/Home/Home";
import About from "../Screens/Client/About/About";
import Contact from "../Screens/Client/Contact/Contact";
import Footer from "../Screens/Client/Footer/Footer";
import ApplyForm from "../Screens/Client/Apply/ApplyForm";
import Login from "../Screens/Client/Auth/Login";
import Gallery from "../Screens/Client/Gallery/Gallery";
import Applyforcertificate from "../Screens/Client/Applyforcertificate/Applyforcertificate";
import DownloadCertificate from "../Screens/Client/DownloadCertificate/DownloadCertificate";
///admin
import Sidebar from "../Screens/Admin/Sidebar/Sidebar";
import Dashbord from "../Screens/Admin/Dashbord/Dashbord";
import Addslider from "../Screens/Admin/Addslider/Addslider";
import AddCourse from "../Screens/Admin/AddCourse/AddCourse";
import Enquriy from "../Screens/Admin/Enquriy/Enquriy";
import Registration from "../Screens/Admin/Registration/Registration";
import Certificate from "../Screens/Admin/Certificate/Certificate";
import MasterTap from "../Screens/Admin/Masters/MasterTap";
import Addword from "../Screens/Admin/Addword/Addword";
export default function MainRoutes({ showadmin, setshowadmin }) {
  return (
    <>
      {showadmin ? "" : <Navbar />}
      {showadmin ? <Sidebar /> : ""}
      <Routes>
        <Route path="/" element={<Home setshowadmin={setshowadmin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply" element={<ApplyForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/apply/certificate" element={<Applyforcertificate />} />
        <Route path="/download/certificate" element={<DownloadCertificate />} />
        <Route
          path="/dashboard"
          element={<Dashbord setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin/Addslider"
          element={<Addslider setshowadmin={setshowadmin} />}
        />

        <Route
          path="/admin/AddCourse"
          element={<AddCourse setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin/Enquriy"
          element={<Enquriy setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin/Registration"
          element={<Registration setshowadmin={setshowadmin} />}
        />

        <Route
          path="/admin/Certificate"
          element={<Certificate setshowadmin={setshowadmin} />}
        />
        <Route
          path="/admin/MasterTap"
          element={<MasterTap setshowadmin={setshowadmin} />}
        />

        <Route
          path="/admin/Addword"
          element={<Addword setshowadmin={setshowadmin} />}
        />

        {/* <Route path="/login" element={<Login setshowadmin={setshowadmin} />} /> */}
      </Routes>
      {showadmin ? "" : <Footer />}
    </>
  );
}
