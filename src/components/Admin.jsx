import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Admin() {
  const [fileSelected, setFileSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [alt, setAlt] = useState(null);
  const [type, setType] = useState(null);
  const [project_id, setProject_id] = useState(null);
  const [projectsList, setProjectsList] = useState(null);
  const [imagesList, setImagesList] = useState(null);
  const [idToDelete, setIdToDelete] = useState(null);
  const [imageToDelete, setImageToDelete] = useState(null);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== "image/png" || type !== "image/jpeg") {
      setFileSelected(event.target.files[0]);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };

  const submitFile = (e) => {
    e.preventDefault();
    if (fileSelected) {
      const data = new FormData();
      data.append("file", fileSelected);
      data.append(
        "configuration",
        JSON.stringify({
          alt,
          type,
          project_id,
        })
      );
      axios({
        method: "POST",
        url: `${API_BASE_URL}/api/picture`,
        data,
      })
        .then((data) => data.data)
        .then((data) => {
          setFile({
            filename: data.title,
          });
          setAlt("");
          setType("");
          setProject_id("");
        })
        .catch((err) => {
          alert("Création échouée");
        });
    }
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/project/`)
      .then((resp) => resp.json())
      .then((data) => {
        setProjectsList(data);
      });
  }, []);

//récupération des images
useEffect(() => {
    fetch(`${API_BASE_URL}/api/picture/`)
      .then((resp) => resp.json())
      .then((data) => {
        setImagesList(data);
      });
  }, []);

  const deleteImage = (e) => {
    let id = idToDelete;
    e.preventDefault();
    axios({
      method: 'DELETE',
      url: `${API_BASE_URL}/api/picture/${id}`,
    })
      .then(() => {
        //ceci permet de recharger la pagse à chaque suppression
        window.location.reload();
        alert('Image supprimée avec succès');
      })
      .catch(() => {
        alert('La suppression a échoué');
      });
  };

  return (
    <main id="admin_container">
      <h1 className="admin_title">Gestion des images</h1>
      <section className="admin_div">
        <h2 className="admin_title">Création</h2>
        <form className="admin_form" onSubmit={submitFile}>
          <input type="file"  accept="image/*" onChange={onChangeFile} />
          <p>Alt de l'image: </p>
          <input
            type="text"
            className="admin_input"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
          />
          <p>Type de l'image:</p>
          <select
            name="Type"
            className="admin_input"
            value={type}
            onBlur={(e) => setType(e.target.value)}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="miniature">Miniature</option>
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
          </select>
          <p>Projet à associer:</p>
          <select
            className="admin_input"
            onBlur={(item) => {
              setProject_id(
                projectsList?.filter((proj) =>
                  proj.title.includes(item.target.value)
                )[0].id
              );
            }}
            onChange={(item) => {
              setProject_id(
                projectsList?.filter((proj) =>
                  proj.title.includes(item.target.value)
                )[0].id
              );
            }}
          >
            <option defaultValue="Aucune">--Sélectionner un projet--</option>
            {projectsList?.map((item, index) => (
              <option key={index} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
          <button className="admin_button" type="submit">
            Charger l'image
          </button>
          {file && (
            <img
            className="admin_loadedImg"
              src={`${API_BASE_URL}/image/${file.filename}`}
              alt="fichier chargé"
            />
          )}
        </form>
      </section>
      <section className="admin_div">
        <h2 className="admin_title">Suppression</h2>
        <form className="prod_form" onSubmit={deleteImage}>
          <label>
            Saisissez le nom du produit à effacer
            <input type="text" placeholder="Nom du produit" value={imageToDelete} onChange={(item) => setImageToDelete(item.target.value)} />
          </label>
          {imageToDelete && (
            <table id="admin_table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {imagesList
                  ?.filter((img) => img.alt.includes(imageToDelete)|| img.title.includes(imageToDelete))
                  .map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.alt}</td>
                      <td>
                        <button
                          className="admin_button"
                          type="submit"
                          onClick={() => {
                            setIdToDelete(item.id);
                          }}>
                          Effacer
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </form>
        </section>
    </main>
  );
}

export default Admin;
