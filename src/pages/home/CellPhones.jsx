import React from "react";
import Menu from "../../components/Menu";
import { useEffect, useState } from "react";
import { Table } from "..//../components/Table";
import { obtainAllCellphones } from "../../hooks/LifeCicle";

export default function CellPhones() {
  const [cellphones, setCellphones] = useState([]);

  useEffect(() => {
    obtainAllCellphones(setCellphones);
  }, []);

  return (
    <div>
      <Menu />
      <h1 className="text-uppercase d-flex justify-content-center animate__animated animate__fadeInRight">
        Cellphones
      </h1>
      <Table
        filas={cellphones}
        controlador="zonecellphones"
        campos={["Id", "Marca", "Modelo", "Color", "precio", "Descripcion", "Operadora"]}
      />
    </div>
  );
}
