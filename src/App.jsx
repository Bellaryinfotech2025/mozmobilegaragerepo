import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./mozcomponent/navbar"
import Footer from "./mozcomponent/footer"
import Home from "./pagescomponent/home"
import About from "./pagescomponent/about"
import Services from "./pagescomponent/services"
import Support from "./pagescomponent/support"
import Toast from "./mozcomponent/toast"
import CookieNotice from "./mozcomponent/cookienotice"
import "./stylescomponent/designstyles.css"
function App() {
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("success")
  const [showToast, setShowToast] = useState(false)
  const [showCookie, setShowCookie] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setShowCookie(true)
    }
  }, [])

  const showToastNotification = (message, type = "success") => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const handleCookieAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowCookie(false)
  }

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home onShowToast={showToastNotification} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <Footer />

        {showToast && <Toast message={toastMessage} type={toastType} />}
        {showCookie && <CookieNotice onAccept={handleCookieAccept} />}
      </div>
    </Router>
  )
}

export default App;
