import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import PackageCard from '../components/PackageCard';
import { packages } from '../data/site';
import './Catalogue.css';

const SCOPES = ['All', 'Local', 'International'];

export default function Catalogue() {
  const [scope, setScope] = useState('All');

  const visible = useMemo(
    () => (scope === 'All' ? packages : packages.filter((p) => p.scope === scope)),
    [scope]
  );

  return (
    <>
      <PageHeader
        eyebrow="Catalogues"
        title="Explore Our Different Travel Packages"
        lead="Curated itineraries designed for authentic comfort and unforgettable memories."
      />

      <section className="section">
        <div className="container">
          <div className="cat__bar">
            <p className="cat__count">
              Showing <strong>{visible.length}</strong> of {packages.length} packages
            </p>

            <ul className="cat__filters">
              {SCOPES.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    className={`cat__filter ${scope === item ? 'cat__filter--on' : ''}`}
                    aria-pressed={scope === item}
                    onClick={() => setScope(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid--3">
            {visible.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <p className="cat__note">
            Rates are per person and subject to availability. Airfare and inclusions
            vary by package — open a package for the full breakdown.
          </p>
        </div>
      </section>
    </>
  );
}
