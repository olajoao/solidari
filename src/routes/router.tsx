import { Route,  Routes } from 'react-router-dom'
import Home from '@/pages/home/home'
import Doar from '@/pages/doar/doar'
import Pedir from '@/pages/pedir/pedir'
import Doacoes from '@/pages/doacoes/doacoes'
import Sobre from '@/pages/sobre/sobre'
import DefaultLayout from '@/layouts/default'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} errorElement={<div>Erro</div>}>
        <Route path="/" element={<Home />} />
        <Route path="/doar" element={<Doar />} />
        <Route path="/pedir" element={<Pedir />} />
        <Route path="doacoes" element={<Doacoes />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
    </Routes>
  )
}
