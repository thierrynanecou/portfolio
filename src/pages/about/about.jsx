import React from "react";
import "./about.scss";
import myPhoto from "./../../assets/photo-thierry.png"

const About = () => {
  return (
    <div className="container-about">
      <aside className="about-title">
  <h2>À propos</h2>
</aside>

  <img src={myPhoto} alt="Ma Photo" className="my-photo" /> {/* Placer la photo ici */}
      <div className="about-content">
        <p>
          Je suis un développeur passionné par la création de solutions
          innovantes et fonctionnelles. Mon objectif est d'utiliser mes
          compétences en développement pour résoudre des problèmes et créer des
          expériences utilisateurs.
        </p>
        <p>
          En dehors du développement, je suis également passionné par le sport.
          Je pratique les arts martiaux ( karaté et judo ), ce qui m'a
          permis d'acquérir un code moral, une rigueur et un dépassement de mes objectifs.
          <br />
          <br /> La fonction d'éducateur de football pour les enfants de 5 à
          7 ans m'apporte des responsabilités et une capacité de transmission de savoir.
         
        </p>
      </div>
    </div>
  );
};

export default About;

