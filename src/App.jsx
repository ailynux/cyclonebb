import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './app/layout/AppLayout'
import { Landing } from './app/routes/Landing'
import { Home } from './app/routes/Home'
import { About } from './app/routes/About'

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AppLayout>
  )
}

export default App
