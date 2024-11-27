/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

import "./styles/listaGeral.css"; // Manter a importação para o CSS personalizado

export default function ModalEdicaoHospedagem(props) {
    let [hospedagem, setHospedagem] = useState(props.hospedagem)
    const [clientesList, setclientesList] = useState(hospedagem.clientes)

    const cor = "#001e3b"

    const handleAcomodacaoChange = (e) => {
        const updatedHospedagem = { ...hospedagem, acomodacao: e.target.value };
        setHospedagem(updatedHospedagem);
    };

    const handleDataInicioChange = (e) => {
        const updatedHospedagem = { ...hospedagem, dataInicio: e.target.value };
        setHospedagem(updatedHospedagem);
    };

    const handleDataFinalChange = (e) => {
        const updatedHospedagem = { ...hospedagem, dataFinal: e.target.value };
        setHospedagem(updatedHospedagem);
    };

    const handleClientesChange = (e, index) => {
        const updatedclientesList = [...clientesList];
        updatedclientesList[index].documentos[0] = e.target.value;
        setclientesList(updatedclientesList);
        hospedagem.clientes = updatedclientesList
    };

    const addClienteField = () => {
        setclientesList([...clientesList, { documentos: [{ numero: "" }] }]);
    };

    const removeclienteField = (index) => {
        const updatedclientesList = [...clientesList];
        updatedclientesList.splice(index, 1);
        console.log(updatedclientesList);
        setclientesList(updatedclientesList);
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Atualizar hospedagem</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="modal-form-container">
                    <label className="modal-form-titulo">Acomodação:</label>
                    <select
                        className="modal-form-select"
                        value={hospedagem.acomodacao}
                        onChange={handleAcomodacaoChange}
                    >
                        <option disabled value="">Selecione o tipo de cliente</option>
                        <option value="Solteiro Simples">Solteiro Simples</option>
                        <option value="Solteiro Mais">Solteiro Mais</option>
                        <option value="Casal Simples">Casal Simples</option>
                        <option value="Família Simples">Família Simples</option>
                        <option value="Família Mais">Família Mais</option>
                        <option value="Família Super">Família Super</option>
                    </select>

                    <hr />

                    <label className="modal-form-titulo">Data Inicio:</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="modal-form-control"
                            placeholder="Data Inicio"
                            aria-label="Data Inicio"
                            value={hospedagem.dataInicio}
                            onChange={handleDataInicioChange}
                        />
                    </div>

                    <label className="modal-form-titulo">Data Final:</label>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="modal-form-control"
                            placeholder="Data Final"
                            aria-label="Data Final"
                            value={hospedagem.dataFinal}
                            onChange={handleDataFinalChange}
                        />
                    </div>

                    <hr />

                    <label className="modal-form-titulo">Clientes Hospedados:</label>
                    {clientesList.map((cliente, index) => (
                        <div key={index} className="modal-clientes-container">
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="modal-form-control"
                                    placeholder="Digite o documento do Cliente"
                                    value={cliente.documentos[0].numero}
                                    onChange={(e) => handleClientesChange(e, index)}
                                />
                                {index > 0 && (
                                    <button
                                        onClick={(e) => removeclienteField(index)}
                                        type="button"
                                        className="modal-remove-button"
                                    >
                                        <FaRegTrashCan style={{ fontSize: 20 }} />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}

                    <button
                        className="modal-add-button"
                        type="button"
                        onClick={addClienteField}
                    >
                        Adicionar cliente
                    </button>

                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="btn btn-outline-secondary"
                    onClick={props.handleClose}
                    className="modal-footer-button"
                >
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
