import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Project.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Project() {
  const { id } = useParams();
  const [projToShow, setProjToShow] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/project/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProjToShow(data);
      });
  }, [id]);

  return (
    <main className="main_container">
      <h1>{projToShow ? projToShow[0].title : false}</h1>
      <section className="project_maininfos">
        <div>
          <h2>Les technos utilisées:</h2>
          <p>{projToShow ? projToShow[0].technology : false}</p>
        </div>
        <div>
          <h2>Cliquez ici pour le trouver</h2>
          <a href={projToShow ? projToShow[0].link : false}>
            <img
              src="https://img.icons8.com/flat-round/64/000000/circled-right-2--v1.png"
              alt="lien"
              className="arrow_icon"
            />
          </a>
        </div>
      </section>
      <section>
        <h2>Quelques visuels</h2>
        <div className="projet_vues">
          <h3> Quelques vues en desktop</h3>
          {projToShow
            ?.filter((img) => img.type === "desktop")
            .map((project, index) => (
              <div className="pics_container">
                <img
                  src={`${API_BASE_URL}/image/${project.imgTitle}`}
                  alt={project.alt}
                  className="project_pics"
                />
              </div>
            ))}
        </div>
        <div className="projet_vues projet_vues_mobile">
          <h3> Quelques vues en mobile</h3>
          <div className="pics_container_mobile">
            {projToShow
              ?.filter((img) => img.type === "mobile")
              .map((project, index) => (
                <img
                  src={`${API_BASE_URL}/image/${project.imgTitle}`}
                  alt={project.alt}
                  className="project_pics_mobile"
                />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
