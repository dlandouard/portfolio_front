import React, { useState, useEffect } from "react";
import "./MainPage.css";
import clindoeil from "../img/clindoeil.gif";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function MainPage() {
    const [projects, setProjects] = useState();

    useEffect(() => {
      fetch(`${API_BASE_URL}/api/project/`)
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data);
        });
    }, []);

  return (
    <section className="main_container">
      <h1>Damien Landouard</h1>
      <h2>Développeur web fullstack ... ou presque</h2>
      <img src={clindoeil} alt="Damien Landouard" />
      <div>
        <p>
          Bienvenue sur mon portfolio. <br /><br />
          Chimiste, analyste, expert, sépcialiste, responsable,... des noms qui
          m'ont été donnés, mais aurjourd'hui, je suis avant tout un ...<br /><br />
          <strong> développeur web !</strong>
        </p>
      </div>
    </section>
  );
}

export default MainPage;
