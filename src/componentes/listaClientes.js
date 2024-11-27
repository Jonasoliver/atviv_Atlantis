/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaPencil, FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalInformacoesCliente from "./modalInformacoesCliente";
import ModalEdicaoCliente from "./modalEdicaoCliente";


export default function ListaClientes({ tema }) {
    const [modalState, setModalState] = useState({
        show: false,
        clienteSelecionado: null,
        modalType: ""
    });

    function handleShow(cliente, modalType) {
        setModalState({
            show: true,
            clienteSelecionado: cliente,
            modalType: modalType
        });
    }

    function handleClose() {
        setModalState({
            show: false,
            clienteSelecionado: null,
            modalType: ""
        });
    }

    // Dados fictícios de clientes
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

    const clientes = [cliente1, cliente2];

    return (
        <div className="container-fluid">
            <div>
                {modalState.show && modalState.modalType === "Informações" && (
                    <ModalInformacoesCliente show={modalState.show} handleClose={handleClose} tema={tema} cliente={modalState.clienteSelecionado} />
                )}
                {modalState.show && modalState.modalType === "Edição" && (
                    <ModalEdicaoCliente show={modalState.show} handleClose={handleClose} tema={tema} cliente={modalState.clienteSelecionado} />
                )}
                <h3 className="titulo">Clientes</h3>
                <div className="list-group">
                    {clientes.map((cliente, index) => (
                        <>
                            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                <a
                                    href="#"
                                    className="list-group-item-action custom-link"
                                    onClick={() => handleShow(cliente, "Informações")}
                                >
                                    <strong> {cliente.nome} </strong> - {cliente.nomeSocial}
                                </a>
                                <button
                                    onClick={() => handleShow(cliente, 'Edição')}
                                    type="button"
                                    className="btn btn-outline-primary"
                                >
                                    <FaPencil style={{ fontSize: 20 }} />
                                </button>
                                <div className="btn-group">
                                    <button
                                        onClick={() => console.log("Deletando Cliente")}
                                        type="button"
                                        className="btn btn-outline-danger"
                                    >
                                        <FaRegTrashCan style={{ fontSize: 20 }} />
                                    </button>
                                </div>
                            </div>
                            <p/>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}