import './PageHeader.css';

/** Compact banner at the top of every inner page. */
export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="pagehead">
      <div className="container">
        {eyebrow && <p className="pagehead__eyebrow">{eyebrow}</p>}
        <h1 className="pagehead__title">{title}</h1>
        {lead && <p className="pagehead__lead">{lead}</p>}
      </div>
    </section>
  );
}
