import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { backendApiUrl, backendUrl } from "../../../config/config";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const formData = new FormData();

function View({ setOpen, updatedata }) {
  const [gamename, setgamename] = useState("");
  const [gameversion, setgameversion] = useState("");
  const [gamedownloads, setgamedownloads] = useState("");
  const [gamebonus, setgamebonus] = useState("");
  const [gameurl, setgameurl] = useState("");
  const [img1, setimg1] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [showloader, setshowloader] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setshowloader(true);
      formData.set("id", updatedata?.id);
      formData.set("gamename", gamename);
      formData.set("gameversion", gameversion);
      formData.set("gamedownload", gamedownloads);
      formData.set("gamebonus", gamebonus);
      formData.set("downloadurl", gameurl);
      formData.set("gameimg", img1 ? img1 : updatedata?.gameimg);
      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.put(`${backendApiUrl}populargame`, formData);

      if (res?.data?.status) {
        setOpen(false);
        setshowloader(false);
        Swal.fire("Great!", res?.data?.msg, "success");
      }
    } catch (error) {
      Swal.fire("Error!", error, "error");
    }
  };

  useEffect(() => {
    if (updatedata) {
      setgamename(updatedata?.gamename);
      setgameversion(updatedata?.gameversion);
      setgamedownloads(updatedata?.gamedownload);
      setgameurl(updatedata?.downloadurl);
      setgamebonus(updatedata?.gamebonus);
    }
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form onSubmit={handlesubmit}>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Student Name</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gamename}
                // name="gamename"
                // onChange={(e) => setgamename(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Date of birth</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gamename}
                // name="gamename"
                // onChange={(e) => setgamename(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Gender</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gamename}
                // name="gamename"
                // onChange={(e) => setgamename(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No 1</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gameversion}
                name="gameversion"
                onChange={(e) => setgameversion(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No 2</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gameversion}
                name="gameversion"
                onChange={(e) => setgameversion(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={gameversion}
                name="gameversion"
                onChange={(e) => setgameversion(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default View;