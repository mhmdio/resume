import React from "react";
import "../styles/RetroHeader.css";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumeDownload;
  }

  return (
    <section id="about" className="about-section">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Character Avatar"
          />
        </div>
        <div className="nine columns main-col">
          <h2>[ CHARACTER INFO ]</h2>

          <div className="stat-box">
            <p>{bio}</p>
          </div>
          
          <div className="row">
            <div className="columns contact-details">
              <h2>[ CONTACT DATA ]</h2>
              <div className="stat-box">
                <p className="address">
                  <span>PLAYER: {name}</span>
                  <br />
                  <span>
                    LOCATION: {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>COMM-LINK: {phone}</span>
                  <br />
                  <span>MESSAGE-PORT: {email}</span>
                </p>
              </div>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="download-button">
                  [ DOWNLOAD CHARACTER SHEET ]
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;