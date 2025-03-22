"use client";
import Image from "next/image";
import "../styles/carrosel.css";
import pessoas from "../config/pessoas.json";
import { useRef, useState } from "react";

export default function Carrosel() {
  const carrosselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carrosselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carrosselRef.current.offsetLeft);
    setScrollLeft(carrosselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carrosselRef.current) return;
    const x = e.pageX - carrosselRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    carrosselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollLeftFunc = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRightFunc = () => {
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="carrosel-wrapper">
      <div className="carrosel"
        ref={carrosselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
      >
        {[...pessoas, ...pessoas].map((pessoa, index) => ( // Duplica os itens
          <div className="pessoa" key={index}>
            <Image 
              className="img-pessoa"
              src={pessoa.foto}
              alt="Pessoa" 
              width={200} 
              height={200}
            />
            <div className="comentario">
              <h2>
                {pessoa.comentario}
              </h2>
              <div className="rate">
                <h2>{pessoa.nome}</h2>
                <h2>{pessoa.rate}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-block">
        <div className="nav-button" onClick={scrollLeftFunc}>
          <Image
            className="img-button"
            src="/left.png" 
            alt="Arrow left" 
            width={12} 
            height={12}
          />
        </div>
        <div className="nav-button" onClick={scrollRightFunc}>
          <Image 
            className="img-button"
            src="/right.png" 
            alt="Arrow right" 
            width={12} 
            height={12}
          />
        </div>
      </div>
    </div>
  );
}