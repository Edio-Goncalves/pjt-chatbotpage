import { FaWrench, FaArrowRight } from "react-icons/fa6";

export default function Prices() {
  return (
    <div id="planos" className="section-prices">
      <section className="prices-wrapper">
        <h3 className="title-pointer">
          <span className="destaque">sem compromisso</span>, cancele a qualquer
          momento!
        </h3>
        <h2 className="title-primary">
          Ganhe tempo qualificando suas menssagens automaticamente
        </h2>
        <div className="price-cards-wr">
          <div>
            <span>
              <FaWrench className="price-ico" />
              Construimos
            </span>
            toda estrutura de servidor, e configuramos o fluxo, você não precisa
            fazer nada.
            <span>
              <FaArrowRight className="price-ico size" />
            </span>
          </div>
          <div>
            <div className="price-card">
              <h3>Starter</h3>
              <div className="prices-prices">
                <p>
                  R$<span>500</span>/construção
                </p>
                <p>
                  R$<span>52</span>,90/Mês
                </p>
                <p>Equivalente a R$1,76 por dia</p>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <p className="resp">
                  *O valor de R$500,00 é referente a construção da estrutura e
                  do seu fluxo e o 52,90 é a manutenção da estrutura
                </p>
              </div>
              <a className="button" href="">
                Contrate agora
              </a>
            </div>
            <div className="price-card premium">
              <div className="prices-flag">Mais vendido</div>
              <h3>Premium</h3>
              <div className="prices-prices">
                <p>
                  R$<span>500</span>/construção
                </p>
                <p>
                  R$<span>94</span>,90/Mês
                </p>
                <p>Equivalente a R$3,16 por dia</p>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <p className="resp">
                  *O valor de R$500,00 é referente a construção da estrutura e
                  do fluxo, e o 94,90 é a manutenção da estrutura incluindo
                  modificações no fluxo
                </p>
              </div>
              <a className="button" href="">
                Contrate agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
