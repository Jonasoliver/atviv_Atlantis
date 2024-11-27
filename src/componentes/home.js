import React from "react";
import "./styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ tema }) {
    return (
        <>
            <div className="hero-container">
                <div className="hero-text">
                    <h2 className="subtitulo-home">Bem-vindo(a) ao paraíso! O melhor sistema para gerenciar seu resort ou hotel na praia!</h2>
                    
                </div>
            </div>

            <div className="container-fluid">
                <div className="recursos">
                    <h3 className="titulo-recursos">Principais recursos para seu resort dos sonhos:</h3>
                    <ul>
                        <li className="lista-recursos">Cadastro de hóspedes e reservas nas suas acomodações</li>
                        <li className="lista-recursos">Visualização e listagem das acomodações do resort à beira-mar</li>
                        <li className="lista-recursos">Gerenciamento completo de hóspedes e reservas</li>
                        <li className="lista-recursos">Edição e exclusão de clientes e reservas com facilidade</li>
                        <li className="lista-recursos">Venda de produtos e serviços para os visitantes</li>
                    </ul>
                </div>
            </div>

            <div className="container-fluid">
                <div className="informacoes">
                    <h3 className="titulo-informacoes">Descubra o Atlantis Resort</h3>
                    <p className="descricao-informacoes">Localizado nas mais paradisíacas praias tropicais, o Atlantis Resort oferece uma experiência única de hospedagem, com serviços de alta qualidade e infraestrutura de luxo. Nosso objetivo é proporcionar a você e seus hóspedes o melhor da natureza, conforto e hospitalidade.</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="beneficios">
                    <h3 className="titulo-beneficios">Benefícios de escolher o Atlantis Resort</h3>
                    <ul>
                        <li className="lista-beneficios">Acomodações com vista para o mar e acesso direto à praia</li>
                        <li className="lista-beneficios">Serviço personalizado e de alta qualidade</li>
                        <li className="lista-beneficios">Atividades de lazer como esportes aquáticos e passeios turísticos</li>
                        <li className="lista-beneficios">Gastronomia deliciosa com frutos do mar frescos e pratos regionais</li>
                        <li className="lista-beneficios">Spa e tratamentos relaxantes para revigorar seu corpo e mente</li>
                    </ul>
                </div>
            </div>

            <div className="container-fluid">
                <div className="contatos">
                    <h3 className="titulo-contatos">Fale Conosco:</h3>
                    <p className="lista-contatos">Envie-nos um email e teremos o prazer em ajudar!</p>
                    <ul>
                        <li className="lista-contatos">Email: atlantis.resort@gmail.com</li>
                        <li className="lista-contatos">Telefone: +55 21 99999-8888</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
