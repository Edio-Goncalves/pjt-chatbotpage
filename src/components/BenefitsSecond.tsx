import { FcAlarmClock } from "react-icons/fc";
export default function BenefitsSecond() {
  return (
    <div className="section-benefits">
      <section className="benefits-wrapper">
        <div className="benefit-content">
          <span>
            <h3>
              <img src="/img/chatbot.png" className="benefits-ico" />
              Disponível 24/7
            </h3>
          </span>
          <p>
            Com o chatbot automatizado, seu WhatsApp atende clientes 24/7,
            respondendo perguntas e qualificando leads, mesmo quando você está
            offline. É como ter alguém cuidando do seu negócio o tempo todo!
          </p>
          <a className="button -second" href="">
            contrate já
          </a>
        </div>
        <div className="benefit-media">
          <img src="/img/git-robo.gif" alt="" />
        </div>
      </section>
    </div>
  );
}
