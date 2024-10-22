// libraries
import { Navigate, Outlet } from 'react-router-dom'

// context functions
import { useLoginContext } from '../../context/loginContext/LoginContext'


function PrivateRoute() {
  const {isLogin} = useLoginContext()
  return (
    <>
      {/* 
        ma inja bayad biaim oun 'Route' hayi ke be onvan 'children' ferestadim ro mitunim ba estefade az 'component' makhsus 
        'react-router-dom' be esm 'Outlet' estefade konim ta dige niazi be 'props va type children' nadarim.

        inja az 'component Navigate' ke male 'react-router-dom' hast estefade mikonim ke age user login nabud befreste be 'url' ke 
        mikhaim ke mishe safhe 'Login page'.
      */}
      {isLogin ? <Outlet /> : <Navigate to="/login" />}
    </>
  )
}

export default PrivateRoute
