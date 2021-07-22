import React, { useState, useEffect } from "react";
import "./MainPage.css";
import clindoeil from "../img/clindoeil.gif";
import avatar from "../img/avatar.png";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function MainPage() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/project/withImgs`)
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  return (
    <main className="main_container">
      <section className="main_section">
        <h1>Damien Landouard</h1>
        <h2>Développeur web fullstack ... ou presque</h2>
        <img src={clindoeil} alt="Damien Landouard" />
        <div>
          <p>
            Bienvenue ! <br />
            <br />
            Chimiste, analyste, expert, spécialiste, responsable, qualiticien,
            chef de projet,... j'ai exercé de nombreuses fonctions , mais
            aujourd'hui, je suis un ...
            <br />
            <br />
            <strong> DEVELOPPEUR WEB !</strong> <br />
            Voici mon portfolio.
          </p>
        </div>
      </section>
      <section className="main_section" id="Projets">
        <h2>Mes projets</h2>
        {projects
          ?.filter((img) => img.type === "miniature")
          .map((project, index) => (
            <>
              <img
                src={`${API_BASE_URL}/image/${project.imgTitle}`}
                alt={project.alt}
              />
              <h3 key={project.title + `_` + index}>{project.title}</h3>
            </>
          ))}
      </section>
      <section className="main_section" id="About">
        <h2>A propos de moi</h2>
        <img src={avatar} alt="avatar" />
        <p>
          Pour en savoir plus: <br />
          <br />
          Je travaille et vis à Chartres.
          <br />
          Issu d'un cursus scientifique, j'aime bouger découvrir et être
          intellectuellement challengé.
          <br />
            Je cherche à développer des sites et des applications qui aident les gens dans leur vie de tous les jours afin de faire de la technologie un outil au service des personnes et pas l'inverse.
        </p>
      </section>
    </main>
  );
}

export default MainPage;
