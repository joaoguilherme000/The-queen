import Image from "next/image";
import "../styles/page.header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-block">
        <a href="">
        <h1>THE QUEEN</h1>
        </a>
        <Image
          className="logo-image"
          src="/logo.png"
          alt="The Queen logo"
          width={64}
          height={64}
          priority
        />
      </div>
      <div className="anchor-block">
        <a href="#Sobre"><h1>Como funciona</h1></a>
        <a href="#Comentarios"><h1>Reviews</h1></a>
        <a href="#Contato"><h1>Contato</h1></a>
      </div>
    </div>
  );
}