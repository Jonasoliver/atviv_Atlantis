/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles/navbar.css"


export default function BarraNavegacao(props) {
  const gerarListaBotoes = () => {
    if (props.botoes.length <= 0) {
      return <></>;
    } else {
      let lista = props.botoes.map((valor) => (
        <li key={valor} className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={(e) => props.seletorView(valor, e)}
          >
            {valor}
          </a>
        </li>
      ));
      return lista;
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="light"
        style={{ backgroundColor: props.tema, marginBottom: 10 }}
      >
        <div className="container-fluid">
          <img src="logo1024-removebg-preview.png"/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {gerarListaBotoes()}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cadastrar
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) =>
                        props.seletorView("Cadastro de Cliente", e)
                      }
                    >
                      Cliente
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => props.seletorView("Cadastro de Hospedagem", e)}
                    >
                      Hospedagem
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
