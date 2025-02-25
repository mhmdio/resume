import React, { useState } from "react";
import "../styles/RetroHeader.css";


const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>[ SEND MESSAGE ]</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm} className="contact-form">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  PLAYER NAME <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  COMM-LINK <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">QUEST TITLE</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  MESSAGE CONTENT <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <button onClick={submitForm} type="submit" className="submit-btn">
                  [ SEND MESSAGE ]
                </button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning">[ ERROR: MESSAGE NOT SENT ]</div>
          <div id="message-success">
            [ MESSAGE SENT SUCCESSFULLY! ]
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>[ CONTACT INFO ]</h4>
            <p className="address">
              PLAYER: {contactName}
              <br />
              COMM-LINK: {contactEmail}
              <br />
              <br />
              BASE: {street}
              <br />
              LOCATION: {city}, {state} {zip}
              <br />
              DIRECT-LINE: {phone}
            </p>
          </div>
        </aside>
      </div>
    </section >
  );
};

export default Contact;