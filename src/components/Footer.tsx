import { FaWhatsapp, FaWrench, FaRegMessage } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { GoDependabot } from "react-icons/go";

export default function Footer() {
  return (
    <div className="section-footer">
      <footer className="footer-wrapper">
        <div>
          <a className="logo" href="/">
            ChatBot
          </a>
          <div className="contact-wrapper">
            <div className="contact">
              <a href="">
                <FaRegMessage className="contact-ico" />
                <span>Contato</span>
              </a>
            </div>
            <div className="contact">
              <a href="">
                <FaWrench className="contact-ico" />
                <span>Suporte</span>
              </a>
            </div>
          </div>
        </div>
        <div className="msg-end">
          <p>
            Automatize seu Whatsapp, qualifique seus leads sem precisar estar
            online.
          </p>
          <div>
            <FaWhatsapp className="ico-footer" />
            <GoDependabot className="ico-footer" />
            <IoMailOutline className="ico-footer" />
          </div>
        </div>
        <div className="end-page">
          <p>© 2024 ChatoBot™. Todos direitos reservados.</p>
          <div className="developer">
            <p>Desenvolvido por</p>
            <a href="">WoW Pages</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
