import PageHeader from '../components/PageHeader';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page is off the map"
        lead="The link may be out of date, or the package may have been retired."
      />
      <section className="section">
        <div className="container">
          <Button to="/">Back to home</Button>
        </div>
      </section>
    </>
  );
}
