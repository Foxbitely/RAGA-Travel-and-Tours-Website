import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import PackageCard from '../components/PackageCard';
import NotFound from './NotFound';
import { packages, inclusions, peso } from '../data/site';
import './PackageDetail.css';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = packages.find((p) => p.id === id);

  if (!pkg) return <NotFound />;

  const alsoLike = packages
    .filter((p) => p.id !== pkg.id && p.scope === pkg.scope)
    .slice(0, 3);

  return (
    <>
      <article className="section detail">
        <div className="container">
          <nav className="detail__crumbs" aria-label="Breadcrumb">
            <Link to="/catalogues">Catalogues</Link>
            <span aria-hidden="true">/</span>
            <span>{pkg.name}</span>
          </nav>

          <div className="detail__layout">
            <img
              className="detail__poster"
              src={pkg.image}
              alt={`${pkg.duration} ${pkg.name} package poster`}
            />

            <div className="detail__info">
              <p className="detail__route">{pkg.route}</p>
              <h1 className="detail__title">{pkg.name}</h1>
              <p className="detail__blurb">{pkg.blurb}</p>

              <dl className="detail__facts">
                <div>
                  <dt>Duration</dt>
                  <dd>{pkg.duration}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{pkg.scope}</dd>
                </div>
                {pkg.airline && (
                  <div>
                    <dt>Flights</dt>
                    <dd>{pkg.airline}</dd>
                  </div>
                )}
              </dl>

              <div className="detail__price">
                <span className="detail__price-label">{pkg.priceLabel}</span>
                <span className="detail__price-value">{peso(pkg.price)}</span>
              </div>

              {pkg.note && <p className="detail__note">{pkg.note}</p>}

              <div className="detail__actions">
                <Button to="/book" size="lg">
                  Book This Package
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Ask a Question
                </Button>
              </div>

              <div className="detail__inclusions">
                <h2 className="detail__inclusions-title">Package inclusions</h2>
                <ul>
                  {inclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      {alsoLike.length > 0 && (
        <section className="section section--blush">
          <div className="container">
            <h2 className="detail__more-title">More {pkg.scope.toLowerCase()} packages</h2>
            <div className="grid grid--3">
              {alsoLike.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
