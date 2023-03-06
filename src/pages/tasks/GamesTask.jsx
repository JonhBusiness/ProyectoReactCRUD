import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function GamesTask({ del }) {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    //console.log(id)
    if (id !== undefined) loadGames();
  }, []);

  async function loadGames() {
    try {
      const res = await axios("https://denny2023.azurewebsites.net/api/juegos/" + id);
      const data = await res.data;

      console.log(data);
      setTitulo(data.titulo);
      setDescripcion(data.description);
      setPlataforma(data.plataforma);
      setPrecio(data.precio);
      setCategoria(data.categoria);
    } catch (error) {
      if (error.response.status === 404) {
        alert("El juego no existe!");
        navigate("/zonegames");
      } else alert(error);
    }
  }

  function enviar(e) {
    e.preventDefault();
    e.stopPropagation();
    const form = document.querySelector("#formulario");

    if (form.checkValidity() === false) form.classList.add("was-validated");
    else {
      if (id === undefined) guardar();
      else if (del !== true) editar();
      else eliminar();
    }
  }

  async function eliminar() {
    try {
      const res = await axios({
        method: "DELETE",
        url: "https://denny2023.azurewebsites.net/api/juegos?id=" + id,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonegames");
    } catch (error) {
      if (error.response.status === 404) {
        alert("Juego no existe!");
        navigate("/zonegames");
      } else alert(error);
    }
  }

  async function editar() {
    try {
      const juego = {
        juegoId: id,
        titulo: titulo,
        descripcion: descripcion,
        plataforma: plataforma,
        precio: precio,
        categoria: categoria,
      };

      const res = await axios({
        method: "PUT",
        url: "https://denny2023.azurewebsites.net/api/juegos",
        data: juego,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonegames");
    } catch (error) {
      alert(error);
    }
  }

  async function guardar() {
    try {
      const juego = {
        juegoId: id,
        titulo: titulo,
        descripcion: descripcion,
        plataforma: plataforma,
        precio: precio,
        categoria: categoria,
      };

      const res = await axios({
        method: "POST",
        url: "https://denny2023.azurewebsites.net/api/juegos",
        data: juego,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonegames");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1>{id === undefined ? "Add" : del !== true ? "Edit" : "Delete"}</h1>

      {id !== undefined ? (
        <div className="form-group">
          <label className="form-label">Games ID</label>
          <input className="form-control" type="text" value={id} readOnly disabled></input>
        </div>
      ) : (
        ""
      )}

      <form id="formulario" className="needs-validation" noValidate>
        <div className="form-group mt-2">
          <label className="form-label">Titulo:</label>
          <input
            className="form-control"
            required
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Descripcion:</label>
          <input
            className="form-control"
            required
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Plataforma:</label>
          <input
            className="form-control"
            required
            type="text"
            value={plataforma}
            onChange={(e) => setPlataforma(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Precio</label>
          <input
            className="form-control"
            required
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">Categoria</label>
          <input
            className="form-control"
            required
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <button
            className={`btn btn-${
              id === undefined ? "success" : del !== true ? "primary" : "danger"
            }`}
            onClick={(e) => enviar(e)}>
            {id === undefined ? "Guardar" : del !== true ? "Editar" : "Eliminar"}
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/zonegames")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
