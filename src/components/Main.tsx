import Testimonials from "./Testimonials";

export default function MainSection() {
  return (
    <div className="section-home-hero">
      <div>
        <main>
          <h1>Chatbots sob medida para</h1>
          <h1>o seu negócio</h1>
          <p className="prf-primary">
            Tenha um assistente virtual sem precisar instalar ou configurar
            nada! Não precisa estar online o tempo todo e esperar horas por
            respostas. Qualifique seus leads de forma simples.
          </p>
          <a className="button" href="">
            Comece agora mesmo
          </a>
          <p className="pgf-small">
            Automatizamos todo o seu fluxo de perguntas e respostas
          </p>
        </main>
        <Testimonials />
      </div>
    </div>
  );
}
