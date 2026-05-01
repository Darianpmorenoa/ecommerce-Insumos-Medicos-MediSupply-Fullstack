import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'
import './Footer.css'

const redesSociales = [
  { icono: <FaFacebookF />, label: 'Facebook', url: '' },
  { icono: <FaInstagram />, label: 'Instagram', url: '' },
  { icono: <FaXTwitter />, label: 'X', url: '' },
  { icono: <FaLinkedinIn />, label: 'LinkedIn', url: '' },
  { icono: <FaYoutube />, label: 'YouTube', url: '' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-brand">Medi<span>Supply</span></p>
        <p className="footer-subtitle">Insumos médicos de calidad para tu bienestar</p>

        <div className="d-flex justify-content-center gap-4 my-3">
          {redesSociales.map(({ icono, label, url }) => (
            <a key={label} href={url || '#'} aria-label={label} className="footer-social-link">
              {icono}
            </a>
          ))}
        </div>

        <hr className="footer-divider" />
        <p className="footer-copy">© {new Date().getFullYear()} MediSupply. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer