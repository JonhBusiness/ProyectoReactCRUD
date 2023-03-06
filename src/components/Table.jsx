import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Table({ controlador, campos, filas }) {
  useEffect(() => {}, []);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>
              <Link to={`/${controlador}/Add`} className="btn btn-success">
                Nuevo
              </Link>
            </td>
            {campos.map((value, index) => {
              return <th key={index}>{value}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {filas.map((value, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link
                    to={`/${controlador}/Edit/${Object.values(value)[0]}`}
                    className="btn btn-primary">
                    Editar
                  </Link>
                  <Link
                    to={`/${controlador}/Delete/${Object.values(value)[0]}`}
                    className="btn btn-danger">
                    Eliminar
                  </Link>
                </td>
                {Object.values(value).map((value2, index2) => {
                  return <td key={index2}>{value2}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
