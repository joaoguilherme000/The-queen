"use client";
import "../styles/page.section.css";
import Model from "./model";
import Carrosel from "./carrosel";
import { useState } from "react";

export default function Section() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const { name, message } = formData;

    if (!name || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Abrindo o email");
    const mailtoLink = `mailto:joaoguilhermehig@gmail.com?subject=Contato de ${name}&body=Nome: ${name}%0D%0AEmail: ${message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="section">
      <div className="sobre" id="Sobre">
        <h2 className="title">Sobre</h2>
        <div className="model">
          <Model/>
          <div className="about-block">
            <h2>Design icônico <br/>
            Um quadro leve e resistente com acabamento impecável.
            </h2>
            <h2>Desempenho superior<br/>
            Câmbio de múltiplas marchas para máxima eficiência e velocidade.
            </h2>
            <h2>Segurança de ponta <br/>
            Freios a disco potentes e iluminação LED integrada.
            </h2>
            <h2>Conforto real<br/>
            Suspensão avançada para suavidade em qualquer terreno.
            </h2>
          </div>
        </div>
      </div>
      <div className="comentarios" id="Comentarios">
        <h2 className="title-comments">Comentarios</h2>
        <Carrosel/>
      </div>
      <div className="contato" id="Contato">
        <div className="message-block">
        <h2>Envia uma mensagem</h2>
        <form onSubmit={handleSubmit} className="input-section">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            maxLength={100}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar Email</button>
        </form>
        <h3>Atenção será enviado um email joaoguilhermehig@gmail.com</h3>
        </div>
        <h1>Chegue no topo e nunca mais se arrependa</h1>
      </div>
    </div>
  );
}