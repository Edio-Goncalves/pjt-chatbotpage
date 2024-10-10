import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="section-home-header">
      <div
        className={`menu-bg-grey ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <div className="header-wrapper" ref={menuRef}>
        <div>
          <a className="logo" href="">
            ChatBot
          </a>

          <nav className={menuOpen ? "active" : ""}>
            <a href="#chatbot" onClick={closeMenu}>
              Demonstração
            </a>
            <a href="#planos" onClick={closeMenu}>
              Planos
            </a>
          </nav>
        </div>

        <a className="button" href="">
          Contato
        </a>

        <div className="bar-open" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}
