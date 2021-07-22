import React from "react";
import "./Footer.css";

function Footer() {

    function pageHaut() {
        window.scrollTo({top: 0, behavior: 'smooth' });
      }
      
  return (
    <main className="footerAll">
      <section className="toUpperPage">
          <img
            src="https://img.icons8.com/fluent/48/000000/circled-up-2.png"
            alt="arrow"
            onClick={pageHaut}
          />
      </section>
      <section className="footerContact">
        <a
          href="http://www.linkedin.com/in/damien-landouard-b40411140/"
          target="blank"
          className="footerLien"
        >
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedinLogo"
          />
        </a>
        <a
          href="https://github.com/dlandouard"
          target="blank"
          className="footerLien"
        >
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="gitHubLogo"
          />
        </a>
        <a href="https://damlando.com/" target="blank" className="footerLien">
          <img
            src="https://img.icons8.com/fluent/48/000000/resume-website.png"
            alt="myWebSite"
          />
        </a>
      </section>
    </main>
  );
}

export default Footer;
