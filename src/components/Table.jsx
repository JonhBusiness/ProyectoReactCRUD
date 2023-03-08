import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export function Table({ controlador, campos, filas }) {
  useEffect(() => {}, []);
  return (
    <div>
      <table className="table table-striped m-4 animate__animated animate__fadeInRight ">
        <thead className="bg-primary text-white text-uppercase ">
          <tr>
            {campos.map((value, index) => {
              return (
                <th className="rounded-1" key={index}>
                  {value}
                </th>
              );
            })}
            <td className="bg-white ">
              <Link className="btn-add" to={`/${controlador}/Add`}>
                <span className="text">Add</span>
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </Link>
            </td>
          </tr>
        </thead>

        <tbody>
          {filas.map((value, index) => {
            return (
              <tr className="fw-bold align-middle " key={index}>
                {Object.values(value).map((value2, index2) => {
                  return (
                    <td className="fs-5" key={index2}>
                      {value2}
                    </td>
                  );
                })}
                <td className=" text-uppercase ">
                  <Link
                    to={`/${controlador}/Edit/${Object.values(value)[0]}`}
                    className=" btn-edit ">
                    <span className="text">Edit</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                      </svg>
                    </span>
                  </Link>
                  &nbsp;
                  <Link
                    to={`/${controlador}/Delete/${Object.values(value)[0]}`}
                    className=" btn-delete ">
                    <span className="text">Delete</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
