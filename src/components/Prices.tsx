import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function Prices() {
  return (
    <div id="preco" className="section-prices">
      <section className="prices-wrapper">
        <h3 className="title-pointer">
          Escolha o que melhor atende sua demanda
        </h3>
        <h2>Preços e planos</h2>
        <div className="prices-boxes">
          <div className="box-price">
            <p className="plan">Básico</p>
            <div className="pr-wr">
              <span>R$699,00</span>
            </div>
            <ul>
              <li>
                <FaCheck className="ico-price" />
                Criação de uma página
              </li>
              <li>
                <IoCloseSharp className="ico-price ico-red" />
                Sem hospedagem
              </li>
              <li>
                <IoCloseSharp className="ico-price ico-red" />
                Sem manutenção
              </li>
              <li>
                <IoCloseSharp className="ico-price ico-red" />
                Sem automação
              </li>
            </ul>
            <button>Saiba Mais</button>
          </div>
          <div className="box-price checked">
            <p className="plan">Inicial</p>
            <div className="pr-wr">
              <span>R$599,00</span>
              <span>+</span>
              <span>R$88,00/Mensal</span>
            </div>
            <ul>
              <li>
                <FaCheck className="ico-price" />
                Criação de uma página
              </li>
              <li>
                <FaCheck className="ico-price" />
                Com hospedagem
              </li>
              <li>
                <FaCheck className="ico-price" />
                Com manutenção
              </li>
              <li>
                <IoCloseSharp className="ico-price ico-red" />
                Sem automação
              </li>
            </ul>
            <button>Saiba Mais</button>
          </div>
          <div className="box-price">
            <p className="plan">Completo</p>
            <div className="pr-wr">
              <span>R$899,00</span>
              <span>+</span>
              <span>R$129,00/Mensal</span>
            </div>
            <ul>
              <li>
                <FaCheck className="ico-price" />
                Criação de uma página
              </li>
              <li>
                <FaCheck className="ico-price" />
                Com hospedagem
              </li>
              <li>
                <FaCheck className="ico-price" />
                Com manutenção
              </li>
              <li>
                <FaCheck className="ico-price" />
                Com ChatBot
              </li>
            </ul>
            <button>Saiba Mais</button>
          </div>
        </div>
      </section>
    </div>
  );
}
