/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalEdicaoHospedagem from "./modalEdicaoHospedagem";


export default function ListaHospedagem({ tema }) {
    const [modalState, setModalState] = useState({
        show: false,
        hospedagemSelecionada: null,
        modalType: ""
    });

    function handleShow(hospedagem, modalType) {
        setModalState({
            show: true,
            hospedagemSelecionada: hospedagem,
            modalType: modalType
        });
    }

    function handleClose() {
        setModalState({
            show: false,
            hospedagemSelecionada: null,
            modalType: ""
        });
    }

    // Dados fictícios de hospedagem
    let cliente1 = {
        id: 1,
        nome: "Ana Souza",
        nomeSocial: "Ana",
        dataNascimento: "22/05/1985",
        dataCadastro: "15/03/2022",
        documentos: [
            {
                numero: "789654",
                dataExpedicao: "10/10/2015",
                tipoDocumento: "Cadastro de Pessoas Física"
            }
        ],
        telefone: [
            {
                ddd: "11",
                numero: "998877665"
            }
        ],
        endereco: {
            rua: "Avenida Central, 1200",
            bairro: "Centro",
            cidade: "São Paulo",
            estado: "São Paulo",
            pais: "Brasil",
            codigoPostal: "12345000"
        },
        titular: undefined,
        dependentes: []
    }
    
    let cliente2 = {
        id: 2,
        nome: "Carlos Silva",
        nomeSocial: "Carlos",
        dataNascimento: "10/12/1990",
        dataCadastro: "20/06/2021",
        documentos: [
            {
                numero: "321654",
                dataExpedicao: "15/03/2019",
                tipoDocumento: "Passaporte"
            }
        ],
        telefone: [
            {
                ddd: "21",
                numero: "912345678"
            }
        ],
        endereco: {
            rua: "Rua das Flores, 430",
            bairro: "Jardim das Palmeiras",
            cidade: "Rio de Janeiro",
            estado: "Rio de Janeiro",
            pais: "Brasil",
            codigoPostal: "98765000"
        },
        titular: cliente1,
        dependentes: []
    }

    cliente1.dependentes.push(cliente2);

    let hospedagem1 = {
        dataInicio: "10/01/2025",
        dataFinal: "15/01/2025",
        acomodacao: "Solteiro Simples",
        clientes: [cliente1]
    }

    let hospedagem2 = {
        dataInicio: "05/04/2025",
        dataFinal: "10/04/2025",
        acomodacao: "Familia Simples",
        clientes: [cliente1, cliente2]
    }

    let hospedagem3 = {
        dataInicio: "20/08/2025",
        dataFinal: "25/08/2025",
        acomodacao: "Casal Simples",
        clientes: [cliente1, cliente2]
    }

    const hospedagens = [hospedagem1, hospedagem2, hospedagem3];

    return (
        <div className="container-fluid">
            <div>
                {modalState.show && modalState.modalType === "Edição" && (
                    <ModalEdicaoHospedagem show={modalState.show} handleClose={handleClose} tema={tema} hospedagem={modalState.hospedagemSelecionada} />
                )}
                <h3 className="titulo">Hospedagens</h3>
                <div className="list-group">
                    {hospedagens.map((hospedagem, index) => (
                        <>
                            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <a
                                    href="#"
                                    className="list-group-item-action custom-link"
                                    onClick={() => handleShow(hospedagem, "Informações")}
                                >
                                    <p> <strong> {hospedagem.acomodacao} </strong> {hospedagem.dataInicio} - {hospedagem.dataFinal} </p>
                                    <strong> Clientes: </strong>
                                    {hospedagem.clientes.map(cliente => (
                                        <span key={cliente.id}> {cliente.nome} </span>
                                    ))}
                                </a>
                                <button
                                    onClick={() => handleShow(hospedagem, 'Edição')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <button
                                    onClick={() => console.log("Deletando hospedagem")}
                                    type="button"
                                    className="btn btn-outline-danger"
                                >
                                    <FaRegTrashCan style={{ fontSize: 20 }} />
                                </button>
                            </div>
                            <br />
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}