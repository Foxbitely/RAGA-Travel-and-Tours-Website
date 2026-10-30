import { useEffect, useState } from 'react';
import { hero } from '../data/site';
import Button from './Button';
import './Hero.css';

const SLIDE_MS = 6000; // how long each photo stays on screen

/** True when the visitor has asked their device to reduce motion. */
function usePrefersReducedMotion() {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export default function Hero() {
  const slides = hero.slides ?? [];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();

  const canPlay = slides.length > 1 && !paused && !reduced;

  // Advance to the next photo. Restarting the timer whenever `index`
  // changes means clicking a dot gives that photo its full time too.
  useEffect(() => {
    if (!canPlay) return undefined;
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      SLIDE_MS
    );
    return () => clearTimeout(timer);
  }, [index, canPlay, slides.length]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured destinations">
      <div className="hero__slides" aria-hidden="true">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`hero__slide ${i === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="hero__eyebrow">{hero.eyebrow}</p>
        <h1 className="hero__title">{hero.title}</h1>
        <p className="hero__body">{hero.body}</p>
        <Button to={hero.cta.to} variant="ghost" size="lg">
          {hero.cta.label}
        </Button>
      </div>

      {slides.length > 1 && (
        <div className="hero__controls">
          <button
            type="button"
            className="hero__pause"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {paused ? (
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5v11l9-5.5z" /></svg>
            ) : (
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" /></svg>
            )}
          </button>

          <div className="hero__dots">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`hero__dot ${i === index ? 'is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                aria-current={i === index ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
