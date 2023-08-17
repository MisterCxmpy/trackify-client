import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectRoute() {
    const user = JSON.parse(localStorage.getItem("user")) || {}

    return (
      <>
        {user && user.createdAt ? <Outlet /> : <Navigate to='/' />}
      </>
    )
}