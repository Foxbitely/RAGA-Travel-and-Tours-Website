import Button from '../components/Button';
import { story } from '../data/site';
import './About.css';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="about__intro">
          <div className="about__prose">
            <h2 className="about__h2">{story.heading}</h2>
            <p className="about__date">{story.date}</p>
            {story.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
            <Button to="/catalogues">Explore Our Packages</Button>
          </div>

          {story.image && (
            <figure className="about__photo">
              <img src={story.image} alt={story.imageAlt} loading="lazy" />
            </figure>
          )}
        </div>

        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-value">2024</span>
            <span className="about__stat-label">Founded in Misamis Occidental</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">14</span>
            <span className="about__stat-label">Packages across Asia and the Philippines</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">5</span>
            <span className="about__stat-label">Inclusions in every package</span>
          </div>
        </div>
      </div>
    </section>
  );
}