import { FaCheckCircle } from "react-icons/fa";

export default function Automation() {
  return (
    <div id="chatbot" className="section-automation">
      <section className="automation-wrapper">
        <div className="automation-content">
          <p className="title-pointer">Quer um diferencial?</p>
          <h2>Chatbot para conversões rápidas e atendimento eficiente</h2>
          <p>
            Adicione um chatbot inteligente à sua landing page para atender seus
            clientes de forma automatizada e eficiente, qualificando seu lead e
            direcionando o tráfego 24/7.
          </p>
          <ul>
            <li>
              <FaCheckCircle className="ico" />
              Atendimento instantâneo 24/7;
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Aumento de conversões capturando leads em tempo real;
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Experiência personalizada para cada produto;
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Integração simples e prática.
            </li>
          </ul>
        </div>
        <div className="automation-chatbot">
          <h2>Veja alguns modelos</h2>
          <div className="bot-models">
            <div>
              <button className="checked">Lead</button>
              <button>Produto</button>
              <button>Advogado</button>
              <button>Menu</button>
              <div className="img-bg-click">
                <img src="./img/click-btn.svg" alt="" />
              </div>
            </div>
            <div className="bot-chat">
              <div>{/* Aqui va ientrar typebot */}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
