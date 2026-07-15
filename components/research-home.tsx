import Link from "next/link";

const fields = [
  {
    code: "ASTRO · 01",
    title: "Resolved stellar populations",
    description:
      "Field notes for M81 and M82 density maps, background models, and faint-substructure validation.",
    href: "/methods/m81-m82",
    accent: "lime",
  },
  {
    code: "ONTO · 02",
    title: "Ontology engineering",
    description:
      "Reusable patterns for class design, SWRL reasoning, SPARQL queries, and explainable health-service models.",
    href: "/notes#ontology-engineering",
    accent: "amber",
  },
  {
    code: "GRAPH · 03",
    title: "Knowledge graphs",
    description:
      "Notes on extracting entities, preserving provenance, and turning research artifacts into connected evidence.",
    href: "/notes#knowledge-graphs",
    accent: "cyan",
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

const network = [
  {
    code: "ARC",
    title: "Figure evidence",
    description: "Inspect complete M81/M82 figures and compare analysis stages.",
    href: "https://archive.chaipat.cc",
  },
  {
    code: "GPH",
    title: "Knowledge relations",
    description: "Traverse relationships among projects, papers, and dependencies.",
    href: "https://graph.chaipat.cc",
  },
  {
    code: "IDX",
    title: "Research identity",
    description: "Return to the central index for projects, publications, and CV.",
    href: "https://chaipat.cc",
  },
];

export function ResearchHome() {
  return (
    <main className="kiwis-home">
      <section className="kiwis-hero">
        <div className="kiwis-orbit kiwi-orbit-one" aria-hidden="true" />
        <div className="kiwis-orbit kiwi-orbit-two" aria-hidden="true" />
        <div className="kiwis-hero-copy">
          <div className="kiwis-kicker">
            <span className="kiwis-status-dot" />
            Research knowledge node · KWS/2026
          </div>
          <p className="kiwis-overline">Knowledge Workspace for Integrated Science</p>
          <h1>
            Keep the method.
            <br />
            <em>Trace the evidence.</em>
          </h1>
          <p className="kiwis-lede">
            KiWiS is the readable layer of the chaipat.cc research network—connecting
            concepts, analysis methods, datasets, and the evidence they produce.
          </p>
          <div className="kiwis-actions">
            <Link className="kiwis-button kiwi-button-primary" href="/notes">
              Browse research notes <span aria-hidden="true">↗</span>
            </Link>
            <a className="kiwis-button kiwi-button-quiet" href="https://archive.chaipat.cc">
              Open figure archive <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <aside className="kiwis-signal-panel" aria-label="Workspace summary">
          <div className="kiwis-panel-header">
            <span>Workspace signal</span>
            <span>LIVE LEDGER</span>
          </div>
          <div className="kiwis-signal-map" aria-hidden="true">
            <span className="kiwis-map-label kiwi-map-label-a">METHOD</span>
            <span className="kiwis-map-label kiwi-map-label-b">EVIDENCE</span>
            <span className="kiwis-map-label kiwi-map-label-c">CONTEXT</span>
            <i className="kiwis-node kiwi-node-a" />
            <i className="kiwis-node kiwi-node-b" />
            <i className="kiwis-node kiwi-node-c" />
            <i className="kiwis-node kiwi-node-d" />
          </div>
          <dl className="kiwis-metrics">
            <div><dt>Domains</dt><dd>03</dd></div>
            <div><dt>Method stages</dt><dd>06</dd></div>
            <div><dt>Linked nodes</dt><dd>03</dd></div>
          </dl>
        </aside>
      </section>

      <section className="kiwis-section">
        <header className="kiwis-section-header">
          <div>
            <p className="kiwis-eyebrow">Active fields · 01—03</p>
            <h2>A workspace shaped by the work.</h2>
          </div>
          <p>
            Short notes explain what an artifact means. Method ledgers preserve how it
            was produced. Source records keep every claim traceable.
          </p>
        </header>
        <div className="kiwis-field-grid">
          {fields.map((field) => (
            <Link className={`kiwis-field-card kiwi-accent-${field.accent}`} href={field.href} key={field.code}>
              <span className="kiwis-card-code">{field.code}</span>
              <h3>{field.title}</h3>
              <p>{field.description}</p>
              <span className="kiwis-card-link">Open field note <b aria-hidden="true">↗</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="kiwis-method-section">
        <div className="kiwis-method-copy">
          <p className="kiwis-eyebrow">Featured method ledger</p>
          <h2>From catalog to faint structure.</h2>
          <p>
            The M81/M82 workflow is documented as a reproducible sequence rather than
            a gallery of disconnected outputs.
          </p>
          <Link href="/methods/m81-m82">Read the complete method <span aria-hidden="true">→</span></Link>
        </div>
        <ol className="kiwis-method-list">
          {methodSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </section>

      <section className="kiwis-section kiwi-network-section">
        <header className="kiwis-section-header">
          <div>
            <p className="kiwis-eyebrow">Connected research network</p>
            <h2>One record, multiple views.</h2>
          </div>
          <p>Move from explanation to evidence, relationships, and the wider project index.</p>
        </header>
        <div className="kiwis-network-grid">
          {network.map((node) => (
            <a href={node.href} key={node.code}>
              <span>{node.code}</span>
              <div><h3>{node.title}</h3><p>{node.description}</p></div>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <aside className="kiwis-legacy-callout">
        <div>
          <span>LEGACY / CMU</span>
          <h2>Looking for the original computer-science setup guides?</h2>
        </div>
        <p>The 204111–204252 course notes remain available as an archived collection.</p>
        <Link href="/legacy">Open legacy guides <span aria-hidden="true">→</span></Link>
      </aside>
    </main>
  );
}
