import './FeatureCard.css';

export default function FeatureCard({ title, body }) {
  return (
    <article className="feature">
      <span className="feature__rule" aria-hidden="true" />
      <h3 className="feature__title">{title}</h3>
      <p className="feature__body">{body}</p>
    </article>
  );
}
