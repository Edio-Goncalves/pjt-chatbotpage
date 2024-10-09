import { IoCloudUploadSharp } from "react-icons/io5";
import { FaRegFaceGrinStars, FaPencil } from "react-icons/fa6";

export default function FirstAction() {
  return (
    <div className="section-firstaction">
      <section className="firstaction-wrapper">
        <h3 className="title-pointer">Automações no seu Whatsapp</h3>
        <h2 className="title-primary">
          Construimos o seu fluxo de atendimento
        </h2>
        <p className="prf-primary">
          Concentre-se apenas no seu lead já qualificado enquanto o chatbot
          qualifica outros para você!
        </p>
        <div className="firstCard-wrapper">
          <div>
            {/* <img src="/img/click-btn.svg" alt="" /> */}
            <IoCloudUploadSharp className="ico-first" />
            <h3>100% em Nuvem</h3>
            <p>
              Não precisar deixar seu computador ligado, nem baixar nada, sem
              instalações complexas ou extensões, sistema online em servidor
              dedicado, acesse de qualquer lugar.
            </p>
          </div>
          <div>
            <FaPencil className="ico-first tree" />
            <h3>Do seu jeito</h3>
            <p>
              Inicie um fluxo personalizado de menssagens à partir de termos,
              palavras chaves ou gatilhos vindos dos seus anuncios. Deixamos o
              assistente configurado para você do seu jeito.
            </p>
          </div>
          <div>
            <FaRegFaceGrinStars className="ico-first tree" />
            <h3>Sem preocupações</h3>
            <p>
              Não precisa estar online, não precisa perder tempo construindo
              fluxos complexos, foque apenas nos seus leads, deixe o resto com
              nós.
            </p>
          </div>
        </div>
        <a className="button" href="">
          Comece agora
        </a>
      </section>
    </div>
  );
}
