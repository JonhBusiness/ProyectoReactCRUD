import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function CellPhonesTask({ del }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [operadora, setOperadora] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    //console.log(id)
    if (id !== undefined) loadGames();
  }, []);

  async function loadGames() {
    try {
      const res = await axios("https://denny2023.azurewebsites.net/api/celulares/" + id);
      const data = await res.data;

      console.log(data);
      setMarca(data.marca);
      setModelo(data.description);
      setColor(data.color);
      setPrecio(data.precio);
      setDescripcion(data.descripcion);
      setOperadora(data.operadora);
    } catch (error) {
      if (error.response.status === 404) {
        alert("El Cell no existe!");
        navigate("/zonecellphones");
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
        url: "https://denny2023.azurewebsites.net/api/celulares?id=" + id,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonecellphones");
    } catch (error) {
      if (error.response.status === 404) {
        alert("Cell no existe!");
        navigate("/zonecellphones");
      } else alert(error);
    }
  }

  async function editar() {
    try {
      const phone = {
        celularId: id,
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora,
      };

      const res = await axios({
        method: "PUT",
        url: "https://denny2023.azurewebsites.net/api/celulares",
        data: phone,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonecellphones");
    } catch (error) {
      alert(error);
    }
  }

  async function guardar() {
    try {
      const phone = {
        celularId: id,
        marca: marca,
        modelo: modelo,
        color: color,
        precio: precio,
        descripcion: descripcion,
        operadora: operadora,
      };

      const res = await axios({
        method: "POST",
        url: "https://denny2023.azurewebsites.net/api/celulares",
        data: phone,
      });

      const data = await res.data;

      alert(data.message);
      if (data.status === 1) navigate("/zonecellphones");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1>{id === undefined ? "Add" : del !== true ? "Edit" : "Delete"}</h1>

      {id !== undefined ? (
        <div className="form-group">
          <label className="form-label">CellPhones ID</label>
          <input className="form-control" type="text" value={id} readOnly disabled></input>
        </div>
      ) : (
        ""
      )}

      <form id="formulario" className="needs-validation" noValidate>
        <div className="form-group mt-2">
          <label className="form-label">marca:</label>
          <input
            className="form-control"
            required
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">modelo:</label>
          <input
            className="form-control"
            required
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            disabled={del === true ? true : false}
          />
          <div className="valid-feedback">Correcto</div>
          <div className="invalid-feedback">Complete el campo</div>
        </div>
        <div className="form-group mt-2">
          <label className="form-label">color:</label>
          <input
            className="form-control"
            required
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
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
          <label className="form-label">descripcion</label>
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
          <label className="form-label">Operadora</label>
          <input
            className="form-control"
            required
            type="text"
            value={operadora}
            onChange={(e) => setOperadora(e.target.value)}
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
          <button className="btn btn-secondary" onClick={() => navigate("/zonecellphones")}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
