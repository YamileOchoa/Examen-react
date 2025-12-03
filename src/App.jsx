import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />} />
        <Route index element={<Home />} />
        <Route path='/entities' element={<Entities />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
