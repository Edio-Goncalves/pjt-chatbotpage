import { FaBars } from "react-icons/fa6";

export default function HeaderSection() {
  return (
    <div className="section-home-header">
      <div className="menu-bg-grey"></div>
      <div className="header-wrapper">
        <div>
          <a className="logo" href="">
            ChatBot
          </a>

          <nav>
            <a href="#chatbot">Demonstração</a>
            <a href="#planos">Planos</a>
          </nav>
        </div>

        <a className="button" href="">
          Contato
        </a>

        <div className="bar-open">
          <FaBars />
        </div>
      </div>
    </div>
  );
}
