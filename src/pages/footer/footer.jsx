import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import logoMail from "./../../assets/Mail.png";
import logoGitHub from "./../../assets/github.png";
import logoLinkedIn from "./../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <h2 className="besoin-aide">Besoin d'aide ? Contactez-moi !</h2>

      <form className="contact-form">
        <label htmlFor="email">Votre Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Entrez votre adresse email"
          required
        />

        <label htmlFor="message">Votre Message :</label>
        <textarea
          id="message"
          name="message"
          placeholder="Écrivez votre message ici"
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>

      <p className="footer-text">
        @2024 Thierry Nanécou
        <NavLink to="https://github.com/thierrynanecou">
          <img src={logoGitHub} alt="Logo GitHub" />
        </NavLink>
        <NavLink to="www.linkedin.com/in/thierry-nanecou-5bab09167">
          <img src={logoLinkedIn} alt="Logo LinkedIn" />
        </NavLink>
        <NavLink to="thierry.nanek@hotmail.com">
          <img src={logoMail} alt="Logo Mail" />
        </NavLink>
      </p>
    </footer>
  );
};

export default Footer;
