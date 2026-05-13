import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const productos = [
  { categoria: "sahumerios", nombre: "Palo Santo Buena Onda", detalle: "Premium", desc: "Sahumerios premium con aromas intensos para armonizar tus espacios.", icono: "🪵", imagen: "/productos/palo-santo-buena-onda.jpeg" },
  { categoria: "sahumerios", nombre: "Siete Chakras", detalle: "Premium", desc: "Sahumerios de la India ideales para relajación y energía positiva.", icono: "🧘", imagen: "/productos/siete-chakras.jpeg" },
  { categoria: "sahumerios", nombre: "Varillas Aromáticas", detalle: "100u", desc: "Gran variedad de aromas para perfumar cualquier ambiente.", icono: "🌸", imagen: "/productos/varillas-aromaticas.jpeg" },
  { categoria: "sahumerios", nombre: "Sahumerios Premium", detalle: "Premium", desc: "Colección premium de palo santo y combinaciones aromáticas.", icono: "✨", imagen: "/productos/sahumerios-premium.jpeg" },
  { categoria: "sahumerios", nombre: "Inciensos Surtidos", detalle: "Premium", desc: "Aromas variados como limón, flores, palo santo y lluvia de plata.", icono: "🔥", imagen: "/productos/inciensos-surtidos.jpeg" },

  { categoria: "limpieza", nombre: "Secuestrante de Polvo", detalle: "5L", desc: "Ayuda a mantener pisos y superficies libres de polvo por más tiempo.", icono: "🧹", imagen: "/productos/secuestrante-polvo.jpeg" },
  { categoria: "limpieza", nombre: "Desinfectante para Piso", detalle: "5L", desc: "Limpia, desinfecta y aromatiza tus espacios en una sola pasada.", icono: "✨", imagen: "/productos/desinfectante-piso.jpeg" },
  { categoria: "limpieza", nombre: "Shampoo para Auto", detalle: "5L", desc: "Limpieza profunda para vehículos, ayuda a remover suciedad y dar brillo.", icono: "🚗", imagen: "/productos/shampoo-auto.jpeg" },
  { categoria: "limpieza", nombre: "Jabón Líquido para Manos", detalle: "5L", desc: "Limpieza suave y efectiva para uso diario en hogares y comercios.", icono: "🫧", imagen: "/productos/jabon-manos.jpeg" },
  { categoria: "limpieza", nombre: "Desengrasante", detalle: "5L", desc: "Potente acción para cocina y superficies difíciles con grasa.", icono: "🍊", imagen: "/productos/desengrasante.jpeg" },
  { categoria: "limpieza", nombre: "Detergente", detalle: "5L", desc: "Ideal para vajilla, utensilios y superficies. Limpieza profunda y brillo.", icono: "🍋", imagen: "/productos/detergente.jpeg" },
  { categoria: "limpieza", nombre: "Suavizante Concentrado", detalle: "5L", desc: "Deja la ropa suave, fresca y con aroma duradero.", icono: "🌸", imagen: "/productos/suavizante.jpeg" },
  { categoria: "limpieza", nombre: "Jabón Líquido Baja Espuma", detalle: "5L", desc: "Especial para lavado automático y semiautomático. Cuida tus prendas.", icono: "💙", imagen: "/productos/jabon-baja-espuma.jpeg" },
];

const pruebas = [
  productos.length === 13,
  productos.every((p) => p.categoria && p.nombre && p.detalle && p.desc && p.imagen),
  productos.some((p) => p.nombre === "Suavizante Concentrado") &&
    productos.some((p) => p.nombre === "Jabón Líquido Baja Espuma"),
];

console.assert(pruebas.every(Boolean), "Hay una prueba del catálogo que no pasó");

function App() {
  const [categoria, setCategoria] = useState("limpieza");
  const productosMostrar = productos.filter((p) => p.categoria === categoria);

  return (
    <main>
      <section className="hero">
        <div className="snow snow1">❄️</div>
        <div className="snow snow2">❄️</div>
        <div className="content">
          <div className="badge">❄️ Catálogo Invierno 2026 · Ushuaia</div>
          <div className="heroGrid">
            <div>
              <p className="eyebrow">Artículos de limpieza</p>
              <h1>Lim<span>Sur</span></h1>
              <h2>Tu hogar impecable también en invierno</h2>
              <p className="lead">Calidad, confianza y buenos precios. Productos seleccionados para hogares y comercios de Ushuaia.</p>
              <div className="heroActions">
                <a href="#productos" className="btn primary">Ver productos</a>
                <a href="https://wa.me/5492901501798" className="btn secondary">Consultar por WhatsApp</a>
              </div>
            </div>

            <div className="promo">
              <div className="spark">✨</div>
              <h3>Promo especial</h3>
              <p><b>Suavizante Concentrado + Jabón Líquido Baja Espuma</b></p>
              <p>Presentación 5 litros · Ideal para el cuidado diario de la ropa.</p>
              <div className="price">PRECIO A COMPLETAR</div>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="catalogo">
        <div className="tabs">
          <button onClick={() => setCategoria("limpieza")} className={categoria === "limpieza" ? "active green" : ""}>🧴 Productos de Limpieza</button>
          <button onClick={() => setCategoria("sahumerios")} className={categoria === "sahumerios" ? "active purple" : ""}>✨ Sahumerios y Aromas</button>
        </div>

        <h2>{categoria === "limpieza" ? "Productos de Limpieza" : "Sahumerios y Aromas"}</h2>
        <p className="sectionText">
          {categoria === "limpieza"
            ? "Presentaciones de 5 litros. Agregá los precios cuando quieras."
            : "Variedad de sahumerios, palo santo e inciensos premium."}
        </p>

        <div className="grid">
          {productosMostrar.map((p) => (
            <article className="card" key={p.nombre}>
              <div className="imgWrap">
                <img src={p.imagen} alt={p.nombre} />
                <div className="icon">{p.icono}</div>
              </div>
              <div className="cardBody">
                <div className="pill">{p.detalle}</div>
                <h3>{p.nombre}</h3>
                <p>{p.desc}</p>
                <div className="priceBox">$ precio</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>📍 Magallanes 1547 · Ushuaia</div>
        <div>📱 2901 501798</div>
        <div>📘 LimSur Ushuaia</div>
        <div>📸 @limsur2018</div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
