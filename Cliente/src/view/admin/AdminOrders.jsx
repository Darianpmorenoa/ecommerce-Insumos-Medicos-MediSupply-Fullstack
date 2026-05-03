import AdminSidebar from '../../components/AdminSidebar'
import { Table, Button } from 'react-bootstrap'
import { ordenes } from '../../data/orders'
import '../admin/AdminHome.css'

export default function AdminOrders() {
  return (
    <div className="admin-page">
      <AdminSidebar />
      <main className="admin-main">
        <h1 className="admin-title">Órdenes de compra</h1>
        <p className="admin-subtitle">Listado de todas las órdenes realizadas.</p>

        <div className="admin-table-actions">
          <Button className="admin-btn-add">+ Nueva orden</Button>
          <Button className="admin-btn-download">⬇ Descargar</Button>
        </div>

        <Table hover responsive className="bg-white rounded shadow-sm">
          <thead style={{ backgroundColor: 'var(--color-dark)', color: 'white' }}>
            <tr>
              <th>#</th>
              <th>Código boleta</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Método de pago</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ordenes.map((o) => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.cod_boleta}</td>
                <td>{o.cliente}</td>
                <td>${o.total.toLocaleString('es-CL')}</td>
                <td>{o.metodo_pago}</td>
                <td>
                  <span className={`admin-badge admin-badge--${o.estado.toLowerCase()}`}>
                    {o.estado}
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