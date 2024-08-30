import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home.jsx'
import User from './views/User.jsx'
import NotFound from './views/NotFound.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './views/Register.jsx'
import injectContext from './js/store/appContext.js'

const Layout = () => {
    const basename = process.env.BASENAME || "";
  return (
    <div>
        <BrowserRouter basename={basename}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default injectContext(Layout)