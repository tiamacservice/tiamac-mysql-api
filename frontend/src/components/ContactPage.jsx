import React from "react";

import "../assets/css/contact.css";

const ContactPage = ({ children }) => {
  return (
    <section className="hero is-fullheight contact">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable ">
            <div className="column is-half has-text-left">
              <h1 className="title is-1 has-text-black-bis ">Contact Us</h1>

              <p className="is-size-5 mt-3">
                <i className="bx bx-envelope bx-sm"></i> ac.tiam2610@gmail.com
              </p>

              <p className="is-size-5 mt-3">
                <i className="bx bxl-whatsapp bx-sm"></i> +62 812-5653-4837
              </p>

              <p className="is-size-5 mt-3">
                <i className="bx bx-map bx-sm"></i> LTC GLODOK, Lt. UG Blok B11
                No.6 Jl.Hayam Wuruk No.127, Jakarta Barat
              </p>
              <div className="social-media">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ac.tiam2610@gmail.com&su=SUBJECT&body=BODY"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="bx bx-envelope bx-md"></i>
                </a>
                <a
                  href="https://wa.me/6281256534837"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="bx bxl-whatsapp bx-md"></i>
                </a>
                <a
                  href="https://www.google.com/maps?ll=-6.155646,106.818328&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=8478086057991919631"
                  target="_blank"
                  className="button is-light is-large"
                >
                  <i className="bx bx-map bx-md"></i>
                </a>
              </div>
            </div>
            <div className="column is-half has-text-left">
              <div className="box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.830754983641!2d106.81706229280198!3d-6.1534162910647545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f52479fc3325%3A0x75a83659d5ccd80f!2sLtc%20Glodok%20Jakarta%20barat!5e0!3m2!1sen!2sid!4v1702847831130!5m2!1sen!2sid"
                  width="565"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
