import Image from "next/image";
import "../styles/page.footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="me">
        <h2>João Guilherme</h2>
        <h3>
          Criando soluções inovadoras para transformar o mundo
        </h3>
      </div>
      <div className="me-too">
        <h3>Redes sociais</h3>
        <div className="socials">
          <a href="https://github.com/joaoguilherme000">
            <Image
              className="logo"
              src="/github.png"
              alt="Github logo"
              width={180}
              height={55}
              priority
            />
          </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-rodrigues-10843b18a/">
            <Image
              className="logo"
              src="/linkedin.png"
              alt="Linkedin logo"
              width={180}
              height={55}
              priority
            />
          </a>
          <a href="https://www.instagram.com/joa1_guilherme/">
            <Image
              className="logo"
              src="/instagram.png"
              alt="Github logo"
              width={180}
              height={55}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}