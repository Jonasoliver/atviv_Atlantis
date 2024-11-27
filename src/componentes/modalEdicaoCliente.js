/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import "./styles/listaGeral.css"; // Certifique-se de que o CSS está importado

export default function ModalEdicaoCliente(props) {
    let [cliente, setCliente] = useState(props.cliente);
    const [telefoneList, setTelefoneList] = useState(cliente.telefone);
    const [documentoList, setDocumentoList] = useState(cliente.documentos);
    const [dependenteList, setDependenteList] = useState(cliente.dependentes);

    const cor = "#001e3b;";

    const handleNomeChange = (e) => {
        const updatedCliente = { ...cliente, nome: e.target.value };
        setCliente(updatedCliente);
    };

    const handleNomeSocialChange = (e) => {
        const updatedCliente = { ...cliente, nomeSocial: e.target.value };
        setCliente(updatedCliente);
    };

    const handleDataNascimentoChange = (e) => {
        const updatedCliente = { ...cliente, dataNascimento: e.target.value };
        setCliente(updatedCliente);
    };

    const handleRuaChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.rua = e.target.value;
        setCliente(updatedCliente);
    };

    const handleBairroChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.bairro = e.target.value;
        setCliente(updatedCliente);
    };

    const handleCidadeChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.cidade = e.target.value;
        setCliente(updatedCliente);
    };

    const handleEstadoChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.estado = e.target.value;
        setCliente(updatedCliente);
    };

    const handlePaisChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.pais = e.target.value;
        setCliente(updatedCliente);
    };

    const handleCodigoPostalChange = (e) => {
        const updatedCliente = { ...cliente };
        updatedCliente.endereco.codigoPostal = e.target.value;
        setCliente(updatedCliente);
    };

    const handleDocumentoChange = (e, index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList[index].numero = e.target.value;
        setDocumentoList(updatedDocumentoList);
        cliente.documentos = updatedDocumentoList;
    };

    const handleTipoDocumentoChange = (e, index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList[index].tipoDocumento = e.target.value;
        setDocumentoList(updatedDocumentoList);
        cliente.documentos = updatedDocumentoList;
    };

    const handleDataExpedicaoChange = (e, index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList[index].dataExpedicao = e.target.value;
        setDocumentoList(updatedDocumentoList);
        cliente.documentos = updatedDocumentoList;
    };

    const addDocumentoField = () => {
        setDocumentoList([...documentoList, { Documento: '' }]);
    };

    const removeDocumentoField = (index) => {
        const updatedDocumentoList = [...documentoList];
        updatedDocumentoList.splice(index, 1);
        setDocumentoList(updatedDocumentoList);
    };

    const addTelefoneField = () => {
        setTelefoneList([...telefoneList, { telefone: '' }]);
    };

    const removeTelefoneField = (e, index) => {
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList.splice(index, 1);
        setTelefoneList(updatedTelefoneList);
    };

    const handleDDDChange = (e, index) => {
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList[index].ddd = e.target.value;
        setTelefoneList(updatedTelefoneList);
        cliente.telefone = updatedTelefoneList;
    };

    const handleNumeroChange = (e, index) => {
        const updatedTelefoneList = [...telefoneList];
        updatedTelefoneList[index].numero = e.target.value;
        setTelefoneList(updatedTelefoneList);
        cliente.telefone = updatedTelefoneList;
    };

    const addDependenteField = () => {
        setDependenteList([...dependenteList, { documentos: [{ numero: "" }] }]);
    };

    const removeDependenteField = (index) => {
        const updatedDependenteList = [...dependenteList];
        updatedDependenteList.splice(index, 1);
        setDependenteList(updatedDependenteList);
    };

    const handleDependenteChange = (e, index) => {
        const updatedDependenteList = [...dependenteList];
        updatedDependenteList[index].documentos[0] = { numero: e.target.value };
        setDependenteList(updatedDependenteList);
        cliente.dependentes = updatedDependenteList;
    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">Atualizar cliente</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-form-container">
                <form>
                    <label className="modal-form-titulo">Nome:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite o nome"
                            aria-label="Nome" aria-describedby="basic-addon1" value={cliente.nome}
                            onChange={(e) => handleNomeChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Nome Social:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite o nome social"
                            aria-label="Nome social" aria-describedby="basic-addon1" value={cliente.nomeSocial}
                            onChange={(e) => handleNomeSocialChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Data Nascimento:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Data Nascimento"
                            aria-label="Data Nascimento" aria-describedby="basic-addon1" value={cliente.dataNascimento}
                            onChange={(e) => handleDataNascimentoChange(e)}
                        />
                    </div>

                    <hr />

                    <p> Endereço: </p>

                    <label className="modal-form-titulo">Rua:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite o rua"
                            aria-label="rua" aria-describedby="basic-addon1" value={cliente.endereco.rua}
                            onChange={(e) => handleRuaChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Bairro:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite o bairro"
                            aria-label="bairro" aria-describedby="basic-addon1" value={cliente.endereco.bairro}
                            onChange={(e) => handleBairroChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Cidade:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite a cidade"
                            aria-label="cidade" aria-describedby="basic-addon1" value={cliente.endereco.cidade}
                            onChange={(e) => handleCidadeChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Estado:</label>
                    <div className="input-group mb-3">
                        <input
                            type="text" className="modal-form-control" placeholder="Digite o estado"
                            aria-label="estado" aria-describedby="basic-addon1" value={cliente.endereco.estado}
                            onChange={(e) => handleEstadoChange(e)} />
                    </div>

                    <label className="modal-form-titulo">País:</label>
                    <div className="input-group mb-3">
                        <input type="text" className="modal-form-control" placeholder="Digite o país"
                            aria-label="país" aria-describedby="basic-addon1" value={cliente.endereco.pais}
                            onChange={(e) => handlePaisChange(e)}
                        />
                    </div>

                    <label className="modal-form-titulo">Código Postal:</label>
                    <div className="input-group mb-3">
                        <input type="number" className="modal-form-control" placeholder="Digite o código postal"
                            aria-label="código postal" aria-describedby="basic-addon1" value={cliente.endereco.codigoPostal}
                            onChange={(e) => handleCodigoPostalChange(e)}
                        />
                    </div>

                    <hr />
                    {/* Seção de Documentos */}
                    <label className="modal-form-titulo">Documentos:</label>
                    {documentoList.map((documento, index) => (
                        <>
                            <div key={index} className="input-group mb-3">
                                <input
                                    type="text"
                                    className="modal-form-control"
                                    placeholder="Digite o documento"
                                    value={documento.numero}
                                    onChange={(e) => handleDocumentoChange(e, index)}
                                />
                                <select
                                    className="modal-form-select"
                                    value={documento.tipoDocumento}
                                    onChange={(e) => handleTipoDocumentoChange(e, index)}
                                >
                                    <option value="CPF">CPF</option>
                                    <option value="RG">RG</option>
                                    <option value="CNPJ">CNPJ</option>
                                </select>
                                <input
                                    type="date"
                                    className="modal-form-control"
                                    value={documento.dataExpedicao}
                                    onChange={(e) => handleDataExpedicaoChange(e, index)}
                                />
                                <button
                                    onClick={() => removeDocumentoField(index)}
                                    type="button"
                                    className="modal-remove-button"
                                >
                                    <FaRegTrashCan />
                                </button>
                            </div>
                        </>
                    ))}
                    <button
                        onClick={addDocumentoField}
                        type="button"
                        className="modal-add-button"
                    >
                        Adicionar Documento
                    </button>

                    <hr />

                    {/* Seção de Telefone */}
                    <label className="modal-form-titulo">Telefone:</label>
                    {telefoneList.map((telefone, index) => (
                        <>
                            <div key={index} className="input-group mb-3">
                                <input
                                    type="text"
                                    className="modal-form-control"
                                    placeholder="Digite o DDD"
                                    value={telefone.ddd}
                                    onChange={(e) => handleDDDChange(e, index)}
                                />
                                <input
                                    type="number"
                                    className="modal-form-control"
                                    placeholder="Digite o número"
                                    value={telefone.numero}
                                    onChange={(e) => handleNumeroChange(e, index)}
                                />
                                <button
                                    onClick={(e) => removeTelefoneField(e, index)}
                                    type="button"
                                    className="modal-remove-button"
                                >
                                    <FaRegTrashCan />
                                </button>
                            </div>
                        </>
                    ))}
                    <button
                        onClick={addTelefoneField}
                        type="button"
                        className="modal-add-button"
                    >
                        Adicionar Telefone
                    </button>

                    <hr />

                    {/* Seção de Dependentes */}
                    <label className="modal-form-titulo">Dependente:</label>
                    {dependenteList.map((dependente, index) => (
                        <>
                            <div key={index} className="input-group mb-3">
                                <input
                                    type="text"
                                    className="modal-form-control"
                                    placeholder="Digite o documento"
                                    value={dependente.documentos[0].numero}
                                    onChange={(e) => handleDependenteChange(e, index)}
                                />
                                <button
                                    onClick={() => removeDependenteField(index)}
                                    type="button"
                                    className="modal-remove-button"
                                >
                                    <FaRegTrashCan />
                                </button>
                            </div>
                        </>
                    ))}
                    <button
                        onClick={addDependenteField}
                        type="button"
                        className="modal-add-button"
                    >
                        Adicionar Dependente
                    </button>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} className="modal-footer-button">
                    Fechar
                </Button>
                <Button variant="primary" onClick={props.handleSave} className="modal-footer-button">
                    Salvar Alterações
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
