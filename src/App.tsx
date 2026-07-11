// Definition des routes du site.
//
//   /                    Accueil
//   /fondateur           Document fondateur (Markdown integral)
//   /programme           Liste des cinq axes
//   /programme/:slug     Detail d'un axe
//   /chantier            Chantier, debat ouvert
//   /accessibilite       Declaration d'accessibilite
//   /participer          Aiguilleur : 3 questions -> ou aider
//   /signaler            Signaler un souci (zero friction, sans compte)
//   *                    404

import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Fondateur from './pages/Fondateur'
import Programme from './pages/Programme'
import AxeDetail from './pages/AxeDetail'
import Chantier from './pages/Chantier'
import Accessibilite from './pages/Accessibilite'
import GardeFous from './pages/GardeFous'
import ViePrivee from './pages/ViePrivee'
import FeuilleDeRoute from './pages/FeuilleDeRoute'
import Signaler from './pages/Signaler'
import Participer from './pages/Participer'
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
          <Route path="chantier/:onglet?" element={<Chantier />} />
          <Route path="accessibilite" element={<Accessibilite />} />
          <Route path="garde-fous" element={<GardeFous />} />
          <Route path="vie-privee" element={<ViePrivee />} />
          <Route path="feuille-de-route" element={<FeuilleDeRoute />} />
          <Route path="participer" element={<Participer />} />
          <Route path="signaler" element={<Signaler />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
