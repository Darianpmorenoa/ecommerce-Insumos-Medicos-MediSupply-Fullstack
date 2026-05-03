import AdminSidebar from '../../components/AdminSidebar'
import { Table, Button } from 'react-bootstrap'
import { usuarios } from '../../data/users'
import '../admin/AdminHome.css'

export default function AdminUsers() {
  return (
    <div className="admin-page">
      <AdminSidebar />
      <main className="admin-main">
        <h1 className="admin-title">Usuarios</h1>
        <p className="admin-subtitle">Listado de clientes registrados en la plataforma.</p>

        <div className="admin-table-actions">
          <Button className="admin-btn-add">+ Nuevo usuario</Button>
        </div>

        <Table hover responsive className="bg-white rounded shadow-sm">
          <thead style={{ backgroundColor: 'var(--color-dark)', color: 'white' }}>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.nombre}</td>
                <td>{u.email}</td>
                <td>{u.telefono}</td>
                <td>
                  <span className={`admin-badge admin-badge--${u.rol}`}>
                    {u.rol}
                  </span>
                </td>
                <td className="admin-table-btns">
                  <Button size="sm" className="admin-btn-edit">Editar</Button>
                  <Button size="sm" className="admin-btn-delete">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </div>
  )
}