import Testimonials from "./Testimonials";

export default function MainSection() {
  return (
    <div className="section-home-hero">
      <div>
        <main>
          <h1>Faça sua marca crescer</h1>
          <h1>com conteúdo consistente</h1>
          <p>
            Tenha uma página exclusiva, rápida e com copy otimizada para
            impulsionar seu negócio. Converta visitantes em clientes, com design
            sob medida para suas necessidades.
          </p>
          <a className="button" href="">
            Fale com o desenvolvedor
          </a>
        </main>
        <Testimonials />
      </div>
    </div>
  );
}
