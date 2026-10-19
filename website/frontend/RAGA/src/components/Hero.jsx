import { hero } from '../data/site';
import Button from './Button';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__body">{hero.body}</p>
        <Button to={hero.cta.to} variant="ghost" size="lg">
          {hero.cta.label}
        </Button>
      </div>
    </section>
  );
}
