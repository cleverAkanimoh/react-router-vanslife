
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Vans/Home"
import About from "./pages/Vans/About"
import Vans from "./pages/Vans/Vans"
import VansDetail from "./pages/Vans/VansDetail"

import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVansDetails from "./pages/Host/HostVansDetails"
import HostVans from "./pages/Host/HostVans"

import Layout from "./components/Layout"
import HostLayout from "./Components/HostLayout"


import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />

          {/* another route */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route path="info" element={<HostVanInfo />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}