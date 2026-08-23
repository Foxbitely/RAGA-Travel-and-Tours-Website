import './SectionHeading.css';

/**
 * Consistent section intro. `align` is 'start' by default — centring is
 * deliberate and opt-in rather than the page-wide default it used to be.
 */
export default function SectionHeading({ eyebrow, title, lead, align = 'start', as: Tag = 'h2' }) {
  return (
    <div className={`sh sh--${align}`}>
      {eyebrow && <p className="sh__eyebrow">{eyebrow}</p>}
      <Tag className="sh__title">{title}</Tag>
      {lead && <p className="sh__lead">{lead}</p>}
    </div>
  );
}
