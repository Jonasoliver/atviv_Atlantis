import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TbCodeDots } from "react-icons/tb";
import "./styles/acomodacoes.css"

export default function Acomodacoes({ tema }) {

  const Acomodacoes = [
    {
      titulo: "Solteiro Simples",
      desc: "Acomodação ideal para um(a) hóspede sozinho(a), com cama confortável e vista para a natureza ao redor.",
      img: "https://i.ibb.co/71HcwL3/solteiro-simples.png",
    },
    {
      titulo: "Solteiro Mais",
      desc: "Acomodação para solteiro(a) com espaço extra, incluindo uma garagem privativa para maior conveniência.",
      img: "https://i.ibb.co/71HcwL3/solteiro-simples.png",
    },
    {
      titulo: "Casal Simples",
      desc: "Uma acomodação romântica e acolhedora para casais, um ambiente relaxante para momentos a dois.",
      img: "https://i.ibb.co/dLQyBpt/casal-simples.jpg",
    },
    {
      titulo: "Família Simples",
      desc: "Acomodação confortável para uma família, com camas extras e um ambiente acolhedor.",
      img: "https://i.ibb.co/HNz6kSg/familia-simples.jpg",
    },
    {
      titulo: "Família Mais",
      desc: "Ideal para famílias maiores, com espaço amplo e comodidades para todos se sentirem em casa.",
      img: "https://i.ibb.co/pf4ZD2M/familia-mais.png",
    },
    {
      titulo: "Família Super",
      desc: "Acomodação ideal par família grande, com capacidade para enorme, ideal para momentos especiais para família toda.",
      img: "https://i.ibb.co/j584w5W/familia-super.jpg",
    }
  ];

  return (
    <div>
      <h1 className="sub">Nossas acomodações:</h1>
      <br />
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Acomodacoes.map((acomodacao, index) => (
            <div key={index} className="col">
              <div className="card">
                <img src={acomodacao.img} alt={`Imagem da acomodação ${acomodacao.titulo}`} className="img-fluid" />
                <div className="card-body">
                  <h3 className="titulo">{acomodacao.titulo}</h3>
                  <p className="desc">{acomodacao.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
