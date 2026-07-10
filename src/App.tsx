// Définition des routes du site.
//
//   /                    Accueil
//   /fondateur           Document fondateur (Markdown intégral)
//   /programme           Liste des cinq axes
//   /programme/:slug     Détail d'un axe
//   *                    404

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Fondateur from './pages/Fondateur'
import Programme from './pages/Programme'
import AxeDetail from './pages/AxeDetail'
import Chantier from './pages/Chantier'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fondateur" element={<Fondateur />} />
          <Route path="programme" element={<Programme />} />
          <Route path="programme/:slug" element={<AxeDetail />} />
          <Route path="chantier" element={<Chantier />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
