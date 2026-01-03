"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Support", path: "/support" },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          
          <span className="logo-text">MOZ</span>
        </Link>

        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="hamburger-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenuUnfold size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
