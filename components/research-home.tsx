import Link from "next/link";
import Image from "next/image";

const fields = [
  {
    code: "01 / ASTRO",
    title: "Resolved stellar populations",
    description:
      "Field notes for M81 and M82 density maps, background models, and faint-substructure validation.",
    href: "/methods/m81-m82",
    status: "ACTIVE LEDGER",
  },
  {
    code: "02 / ONTO",
    title: "Ontology engineering",
    description:
      "Patterns for class design, rule-based reasoning, and explainable health-service models.",
    href: "/notes#ontology-engineering",
    status: "FIELD NOTES",
  },
  {
    code: "03 / GRAPH",
    title: "Knowledge graphs",
    description:
      "Entity relationships, research provenance, and connected evidence across the project network.",
    href: "/notes#knowledge-graphs",
    status: "FIELD NOTES",
  },
];

const methodSteps = [
  "Catalog preparation",
  "Overlap removal",
  "Density mapping",
  "Background model",
  "Poisson S/N",
  "Validation",
];

const visualIndex = [
  {
    id: "M81-099",
    stage: "Density models",
    title: "Double Residual Map V2",
    src: "/research/m81-099.webp",
    alt: "Double residual density map of M81 after removing the M81 and DDO 66 models",
    width: 1800,
    height: 1786,
  },
  {
    id: "M81-107",
    stage: "Validation",
    title: "CMD Spatial 4 V3",
    src: "/research/m81-107.webp",
    alt: "Complete smooth disk density map of M81 made from the red-star color magnitude selection",
    width: 1800,
    height: 1783,
  },
];

export function ResearchHome() {
  return (
    <main className="kiwis-home">
      <header className="kiwis-cover">
        <div className="kiwis-cover-register" aria-label="Workspace registration">
          <span>KWS / RESEARCH LEDGER</span>
          <span>VOL. 02 · 2026</span>
          <span>STATUS · ACTIVE</span>
        </div>

        <div className="kiwis-cover-grid">
          <div className="kiwis-cover-title">
            <p>Knowledge Workspace for Integrated Science</p>
            <h1>KiWiS</h1>
            <span>Methods · Evidence · Context</span>
          </div>

          <div className="kiwis-cover-statement">
            <span className="kiwis-register-mark" aria-hidden="true">K</span>
            <p className="kiwis-cover-index">FIELD INDEX / 00</p>
            <h2>Keep the method.<br />Trace the evidence.</h2>
            <p>
              A working research notebook connecting concepts, analysis methods,
              datasets, and the evidence they produce across the chaipat.cc network.
            </p>
            <nav className="kiwis-cover-actions" aria-label="Primary workspace links">
              <Link href="/methods/m81-m82">Read the method ledger <span aria-hidden="true">→</span></Link>
              <a href="https://archive.chaipat.cc">Inspect figure evidence <span aria-hidden="true">↗</span></a>
            </nav>
          </div>
        </div>

        <section className="kiwis-visual-index" aria-labelledby="visual-index-title">
          <div className="kiwis-visual-index-heading">
            <div>
              <span>SELECTED PLATES / 001–002</span>
              <h2 id="visual-index-title">Read the evidence visually.</h2>
            </div>
            <p>
              Two complementary M81 frames anchor the notebook: one isolates residual
              structure, while the other validates the smooth stellar disk.
            </p>
            <a href="https://archive.chaipat.cc">Browse research records <span aria-hidden="true">↗</span></a>
          </div>
          <div className="kiwis-visual-grid">
            {visualIndex.map((figure, index) => (
              <a
                href={`https://archive.chaipat.cc/figures/m81/${figure.id.toLowerCase()}.webp`}
                key={figure.id}
              >
                <Image
                  src={figure.src}
                  alt={figure.alt}
                  width={figure.width}
                  height={figure.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  priority={index === 0}
                />
                <span>
                  <small>{figure.id} · {figure.stage}</small>
                  <strong>{figure.title}</strong>
                  <i>Open record</i>
                </span>
              </a>
            ))}
          </div>
        </section>

        <dl className="kiwis-cover-metrics">
          <div><dt>Research domains</dt><dd>03</dd></div>
          <div><dt>Documented stages</dt><dd>06</dd></div>
          <div><dt>Core practice</dt><dd>TRACE</dd></div>
          <div><dt>Primary ledger</dt><dd>M81 / M82</dd></div>
        </dl>
      </header>

      <section className="kiwis-index-section" aria-labelledby="field-index-title">
        <div className="kiwis-section-label">
          <span>REGISTER 01</span>
          <span>ACTIVE FIELDS</span>
        </div>
        <div className="kiwis-section-intro">
          <h2 id="field-index-title">Field index</h2>
          <p>
            Notes explain what an artifact means. Ledgers preserve how it was made.
            Source records keep each claim traceable.
          </p>
        </div>
        <div className="kiwis-field-register">
          {fields.map((field) => (
            <Link href={field.href} key={field.code}>
              <span className="kiwis-field-code">{field.code}</span>
              <div>
                <h3>{field.title}</h3>
                <p>{field.description}</p>
              </div>
              <span className="kiwis-field-status">{field.status}</span>
              <span className="kiwis-field-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="kiwis-method-ledger" aria-labelledby="method-ledger-title">
        <div className="kiwis-section-label kiwi-inverse">
          <span>LEDGER 001</span>
          <span>RESOLVED STELLAR POPULATIONS</span>
        </div>
        <div className="kiwis-method-layout">
          <div className="kiwis-method-intro">
            <p>Featured method</p>
            <h2 id="method-ledger-title">From catalog<br />to faint structure.</h2>
            <p>
              The M81/M82 analysis is recorded as a reproducible chain, not a gallery
              of disconnected outputs.
            </p>
            <Link href="/methods/m81-m82">Read the complete ledger <span aria-hidden="true">→</span></Link>
          </div>
          <ol className="kiwis-method-list">
            {methodSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                <i aria-hidden="true">{index < methodSteps.length - 1 ? "↓" : "■"}</i>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <aside className="kiwis-archive-note">
        <span>ARCHIVE / CMU COMPUTER SCIENCE</span>
        <h2>The original course and setup guides remain preserved.</h2>
        <p>Historical notes for courses 204111–204252 are retained as a separate collection.</p>
        <Link href="/legacy">Open archived guides <span aria-hidden="true">→</span></Link>
      </aside>
    </main>
  );
}
