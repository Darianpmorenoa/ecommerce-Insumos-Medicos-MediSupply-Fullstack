import './AdminFooter.css'

export default function AdminFooter() {
  return (
    <footer className="footer-admin">
      <span>Medi<strong>Supply</strong></span>
      <small>© {new Date().getFullYear()}</small>
    </footer>
  )
}