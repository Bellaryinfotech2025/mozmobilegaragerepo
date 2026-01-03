"use client"

import { useState } from "react"

const CookieNotice = ({ onAccept }) => {
  const [visible, setVisible] = useState(true)

  const handleAccept = () => {
    onAccept()
    setVisible(false)
  }

  const handleDecline = () => {
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-notice">
      <div className="cookie-content">
        <div className="cookie-text">
          <h3>🍪 Cookie Notice</h3>
          <p>
            We use cookies to improve your experience on our website. By continuing to browse, you agree to our use of
            cookies.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-decline" onClick={handleDecline}>
            Decline
          </button>
          <button className="cookie-accept" onClick={handleAccept}>
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieNotice
