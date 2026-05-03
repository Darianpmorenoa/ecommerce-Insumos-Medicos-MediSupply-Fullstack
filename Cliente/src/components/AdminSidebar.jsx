import { NavLink, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../view/Auth'
import AdminFooter from './AdminFooter'
import './AdminSidebar.css'

const links = [
  { to: '/admin/home',      label: 'Home' },
  { to: '/admin/ordenes',   label: 'Órdenes de compra' },
  { to: '/admin/usuarios',  label: 'Usuarios' },
  { to: '/admin/productos', label: 'Productos' },
]

export default function AdminSidebar() {
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin')
  }

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-brand">
        Medi<span>Supply</span>
        <small>Panel Admin</small>
      </div>

      <nav className="admin-sidebar-nav">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `admin-sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="admin-sidebar-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>

      <AdminFooter />
    </aside>
  )
}