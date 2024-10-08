import { FaCheckCircle } from "react-icons/fa";

export default function Benefits() {
  return (
    <div className="section-benefits">
      <section className="wrapper-benefits">
        <h3 className="title-pointer">Por que escolher a WooW Pages?</h3>
        <h2>Vamos ajudar você a apresentar o valor do seu trabalho</h2>
        <p>
          Mostraremos por que o cliente deve escolher seu serviço ou produto.
          Criaremos uma página desenvolvida sob medida, otimizada para
          performance e resultados. Com o foco em ajudar você a fidelizar o seu
          lead.
        </p>
        <div>
          <ul>
            <li>
              <FaCheckCircle className="ico" />
              Temos redatores especializados em copy de alta conversão
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Páginas rápidas e otimizadas para garantir conversões mais altas.
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Design que reflete a identidade única do seu negócio.
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Estrutura para um bom ranqueamento nos motores de busca.
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Páginas perfeitas para qualquer dispositivo.
            </li>
            <li>
              <FaCheckCircle className="ico" />
              Para profissionais liberais, temos acessoria juridica para estar
              de acordo com conselho de ética de cada profissão.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
