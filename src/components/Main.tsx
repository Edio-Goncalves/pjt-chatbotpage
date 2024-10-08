import Testimonials from "./Testimonials";

export default function MainSection() {
  return (
    <div className="section-home-hero">
      <div>
        <main>
          <h1>Chatbots sob medida para</h1>
          <h1>o seu negócio</h1>
          <p>
            Tenha um assistente virtual sem precisar instalar ou configurar
            nada! Automatizamos todo o seu fluxo de perguntas e respostas para
            que você se concentre apenas em seus leads, sem esperar horas por
            respostas ou precisar estar online o tempo todo.
          </p>
          <a className="button" href="">
            Comece agora mesmo
          </a>
        </main>
        <Testimonials />
      </div>
    </div>
  );
}
