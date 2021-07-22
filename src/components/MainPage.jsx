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
        <img src={clindoeil} alt="Damien Landouard" className="photo_bulle" />
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
        <h2>Les projets sur lesquels j'ai travaillé</h2>
        <div className="projects_container">
          {projects
            ?.filter((img) => img.type === "miniature")
            .map((project, index) => (
              <a
                href={`/projet/${project.id}`}
                key={project.id}
                className="project_link"
              >
                <div className="project_card">
                  <img
                    src={`${API_BASE_URL}/image/${project.imgTitle}`}
                    alt={project.alt}
                    className="main_img"
                  />
                  <h3 key={project.title + `_` + index}>{project.title}</h3>
                </div>
              </a>
            ))}
        </div>
      </section>
      <section className="main_section" id="About">
        <h2>A propos de moi</h2>
        <img src={avatar} alt="avatar" className="photo_bulle" />
        <p>
          Pour en savoir plus: <br />
          <br />
          Seinomarin d'origine, je travaille et vis à Chartres.
          <br />
          Issu d'un cursus scientifique, j'aime bouger découvrir et être
          intellectuellement challengé.
          <br />
          Je cherche à développer des sites et des applications qui aident les
          gens au quotidien et donc à mettre la technologie au service des
          personnes.
        </p>
      </section>
    </main>
  );
}

export default MainPage;
