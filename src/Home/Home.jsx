import "./Home.css";
import { useState } from "react";

const menuItems = [
  "Productos",
  "Caracteristicas",
  "Instalacion",
  "Clientes",
  "Contacto",
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="home">
      <section className="hero-panel" aria-label="TotemSec inicio">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="DU&RE">
            <span className="brand-mark" aria-hidden="true" />
            <span>TOTEMSEC</span>
          </a>

          <button
            className="close-button"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </header>

        {menuOpen && (
          <>
            <nav className="site-nav" aria-label="Navegacion principal">
              {menuItems.map((item) => (
                <a href={`#${item.toLowerCase()}`} key={item}>
                  {item}
                </a>
              ))}
            </nav>

            <a className="demo-button" href="#contacto">
              Solicitar demo
            </a>
          </>
        )}

        <div className="hero-content" id="inicio">
          <p className="eyebrow">Seguridad inteligente para edificios</p>

          <h1>Tótems de seguridad para edificios</h1>

          <p className="lead">
            Control de acceso inteligente con pantalla interactiva,
            reconocimiento facial por IA y control de acceso integrado.
            Diseñados exclusivamente para las entradas de edificios
            residenciales y corporativos.
          </p>

          <div className="actions" aria-label="Acciones principales">
            <a className="primary-action" href="#productos">
              Ver productos
              <span aria-hidden="true"> → </span>
            </a>

            <a className="secondary-action" href="#funciona">
              Cómo funciona
            </a>
          </div>
        </div>

        <dl className="stats" aria-label="Metricas de TotemSec">
          <div>
            <dt>250+</dt>
            <dd>Edificios protegidos</dd>
          </div>

          <div>
            <dt>99.8%</dt>
            <dd>Precisión biométrica</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}

export default Home;