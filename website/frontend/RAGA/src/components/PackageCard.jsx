import { Link } from 'react-router-dom';
import { peso } from '../data/site';
import './PackageCard.css';

export default function PackageCard({ pkg }) {
  return (
    <article className="pkg">
      <Link to={`/catalogues/${pkg.id}`} className="pkg__media">
        <img src={pkg.image} alt={`${pkg.duration} ${pkg.name} package poster`} loading="lazy" />
        <span className="pkg__badge">{pkg.duration}</span>
      </Link>

      <div className="pkg__body">
        <p className="pkg__route">{pkg.route}</p>
        <h3 className="pkg__name">{pkg.name}</h3>
        <p className="pkg__blurb">{pkg.blurb}</p>
      </div>

      <div className="pkg__foot">
        <div className="pkg__price">
          <span className="pkg__price-label">{pkg.priceLabel}</span>
          <span className="pkg__price-value">{peso(pkg.price)}</span>
        </div>
        <Link to={`/catalogues/${pkg.id}`} className="btn btn--solid btn--md">
          View Details
        </Link>
      </div>
    </article>
  );
}
