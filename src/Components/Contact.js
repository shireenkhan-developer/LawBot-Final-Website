import React from "react";

export default function Contact() {
  return (
    <section className="sec4" id="sec4">
      <h1 className="heading-3 text-center">CONTACT</h1>
      <div className="contact-Info">
        <ul className="my-contact">
          <li>
            <a href="mailto:shireenkhan.412@gmail.com" className="icon">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shireen-khan-19b8aa194"
              className="icon"
            >
              <i className="fa-brands fa-linkedin "></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/shireenkhan-developer" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div id="location">
        <i className="fa-solid fa-location-dot text-center"></i> Islamabad,
        Pakistan{" "}
      </div>
    </section>
  );
}
