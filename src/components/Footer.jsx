import './Footer.css'

const NAME = 'YOUR_NAME'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span className="footer__copy">
          <span className="footer__bracket">&copy;</span>{' '}
          {year}{' '}
          <span className="footer__name">{NAME}</span>
        </span>
        <span className="footer__tagline">
          <span className="footer__dot" aria-hidden="true" />
          Cybersecurity &amp; Software Engineering
        </span>
      </div>
    </footer>
  )
}
