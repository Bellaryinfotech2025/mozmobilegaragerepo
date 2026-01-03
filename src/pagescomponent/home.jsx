"use client"

import SelectionWrapper from "../mozcomponent/selectionwrapper"
import HeroImage from "../assets/image.png"
import { FaRupeeSign } from "react-icons/fa"
import { MdOutlineVerified, MdLocalShipping } from "react-icons/md"
import { HiOutlineBolt } from "react-icons/hi2"


const Home = ({ onShowToast }) => {
  return (
    <div className="lavender-mobile-root" style={{ width: "100%" }}>
      
      {/* ================= HERO SECTION ================= */}
      <section
        className="orchid-mobile-hero"
        style={{
          width: "100vw",
          height: "60vh",
          maxHeight: "700px",
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <div
          className="orchid-hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          }}
        />

        {/* Hero Content */}
        <div
          className="orchid-hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "20px",
            maxWidth: "1100px",
            color: "#ffffff",
          }}
        >
          <h1
            className="orchid-hero-title"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "800",
              letterSpacing: "1px",
              marginBottom: "20px",
              lineHeight: "1.2",
              color: "#f8fafc",
            }}
          >
            Moz <span className="orchid-hero-highlight">Mobile Garage</span>
          </h1>

          <p
            className="orchid-hero-subtitle"
            style={{
              fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
              fontWeight: "600",
              marginBottom: "15px",
              color: "#e5e7eb",
            }}
          >
            Trusted Doorstep Mobile Repair Service
          </p>

          <p
            className="orchid-hero-description"
            style={{
              fontSize: "1.15rem",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#d1d5db",
              lineHeight: "1.8",
            }}
          >
            Fast, reliable, and professional smartphone repairs delivered right to your home.
            Track your repair, get updates, and relax while our experts handle the rest.
          </p>
        </div>
      </section>

      {/* ================= SELECTION / TABS ================= */}
      <section className="lotus-service-section" style={{ width: "100%", background: "#f8fafc" }}>
        <SelectionWrapper onShowToast={onShowToast} />
      </section>

      {/* ================= FEATURES ================= */}
{/* ================= FEATURES (COMPRESSED) ================= */}
<section
  style={{
    padding: "60px 16px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #e8ecf1 100%)",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
      marginBottom: "40px",
      color: "#1a1a1a",
      fontWeight: "800",
    }}
  >
    Why Choose <span style={{ color: "#660033" }}>Moz</span>?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "24px",
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >
    {[
      {
        icon: <HiOutlineBolt />,
        title: "Fast Repairs",
        desc: "Quick doorstep mobile repair service",
        color: "#8b5cf6",
      },
      {
        icon: <FaRupeeSign />,
        title: "Affordable",
        desc: "Clear pricing with no hidden fees",
        color: "#10b981",
      },
      {
        icon: <MdOutlineVerified />,
        title: "Certified Parts",
        desc: "Original spares with service warranty",
        color: "#660033",
      },
      {
        icon: <MdLocalShipping />,
        title: "Doorstep Service",
        desc: "Free pickup and safe delivery",
        color: "#0ea5e9",
      },
    ].map((feature, idx) => (
      <div
        key={idx}
        style={{
          background: "#ffffff",
          padding: "28px 26px",
          borderRadius: "16px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "18px",
          textAlign: "left",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px)"
          e.currentTarget.style.boxShadow =
            "0 14px 32px rgba(0,0,0,0.22)"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)"
          e.currentTarget.style.boxShadow =
            "0 6px 18px rgba(0,0,0,0.12)"
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "14px",
            background: `${feature.color}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: feature.color,
            flexShrink: 0,
          }}
        >
          {feature.icon}
        </div>

        {/* Text */}
        <div>
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "6px",
              color: "#111827",
              fontWeight: "700",
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              color: "#4b5563",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            {feature.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


    </div>
  )
}

export default Home
