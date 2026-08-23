import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import PackageCard from '../components/PackageCard';
import Button from '../components/Button';
import { features, packages, popularIds } from '../data/site';
import './Home.css';

export default function Home() {
  const popular = popularIds
    .map((id) => packages.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <>
      <Hero />

      {/* Why Choose RAGA? */}
      <section className="section">
        <div className="container">
          <SectionHeading
            align="center"
            title="Why Choose RAGA?"
            lead="We make your travel dreams come true with exceptional service."
          />

          <div className="grid grid--3">
            {features.map((item) => (
              <FeatureCard key={item.id} title={item.title} body={item.body} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular destinations */}
      <section className="section section--blush">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Popular Destinations"
            title="Discover our most popular travel destinations"
          />

          <div className="grid grid--3">
            {popular.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="home__more">
            <Button to="/catalogues" variant="outline" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="home__cta">
        <div className="container home__cta-inner">
          <h2 className="home__cta-title">Ready for your next adventure?</h2>
          <p className="home__cta-body">
            Allow us to help you find the perfect plan.
          </p>
          <Button to="/book" variant="ghost" size="lg">
            Get Started
          </Button>
        </div>
      </section>
    </>
  );
}
