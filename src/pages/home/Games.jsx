import React from "react";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { Table } from "..//../components/Table";
import { obtainAllGames } from "../../hooks/LifeCicle";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    obtainAllGames(setGames);
  }, []);

  return (
    <div>
      <Menu />
      <h1 className="text-uppercase d-flex justify-content-center animate__animated animate__fadeInRight">Games</h1>
      {games === undefined ? (
        <div className="spinner-border text-primary" role="status">
          <span>Loading...</span>
        </div>
      ) : (
        <Table
          filas={games}
          controlador="zonegames"
          campos={["Id", "Titulo", "Descripcion", "plataforma", "precio", "categoria"]}
        />
      )}
    </div>
  );
}
