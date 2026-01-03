"use client"

import { useState } from "react"
import axios from "axios"

const apiUrl = "http://195.35.45.56:2585/api/issues"

const NewEntryIssue = ({ onShowToast }) => {
  const [showModal, setShowModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [trackingId, setTrackingId] = useState("")
  const [customIssueVisible, setCustomIssueVisible] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    mobileBrand: "",
    mobileModel: "",
    issueType: "",
    customIssue: "",
  })

  const mobileBrands = {
    Samsung: ["Galaxy S21", "Galaxy S22", "Galaxy A12", "Galaxy M31", "Galaxy S23", "Galaxy Note 20", "Galaxy Z Fold"],
    Apple: ["iPhone 14", "iPhone 13", "iPhone 12", "iPhone SE", "iPhone 15", "iPhone 11", "iPhone XR"],
    Redmi: ["Note 11", "Note 10", "Redmi 10", "Redmi 9", "Note 12", "Redmi K40", "Redmi 12"],
    Vivo: ["V23", "V21", "Y73", "Y51", "V25", "Y33", "X80"],
    Oppo: ["A53", "A73", "Reno 6", "Reno 5", "Reno 8", "Find X5", "A95"],
  }

  const issueTypes = ["Screen Issue", "Battery Issue", "Charging Issue", "Speaker Issue", "Camera Issue", "Software Issue", "Hardware Damage", "Overheating", "Network Problem"]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!formData.email.endsWith("@gmail.com")) {
      newErrors.email = "Email must be a valid @gmail.com address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (!formData.mobileBrand) {
      newErrors.mobileBrand = "Mobile brand is required"
    }

    if (!formData.mobileModel) {
      newErrors.mobileModel = "Mobile model is required"
    }

    if (!formData.issueType) {
      newErrors.issueType = "Issue type is required"
    }

    return newErrors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const simulateProgress = async () => {
    for (let i = 0; i <= 100; i += 20) {
      setProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 300))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      onShowToast("Please fix all errors", "error")
      return
    }

    setLoading(true)
    await simulateProgress()

    try {
      const response = await axios.post(apiUrl, formData)
      const newTrackingId = response.data.trackingId
      setTrackingId(newTrackingId)
      setShowModal(false)
      setShowSuccessModal(true)
      onShowToast("✅ Data stored successfully", "success")
      setTimeout(() => {
        onShowToast("📧 Confirmation sent to your Email", "info")
      }, 500)
      setTimeout(() => {
        onShowToast("📱 WhatsApp update will be shared shortly", "info")
      }, 1000)
    } catch (error) {
      onShowToast("Error submitting issue", "error")
    } finally {
      setLoading(false)
      setProgress(0)
    }
  }

  return (
    <div className="entry-container">
      <button className="entry-btn" onClick={() => setShowModal(true)}>
        + Create New Issue
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2 className="modal-title">Create Issue</h2>
            <p className="modal-subtitle">Fast, Reliable Mobile Repair</p>

            <form onSubmit={handleSubmit} className="entry-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={errors.name ? "error" : ""}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@gmail.com"
                  className={errors.email ? "error" : ""}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit number"
                  maxLength="10"
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter your full address"
                  rows="2"
                  className={errors.address ? "error" : ""}
                ></textarea>
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mobileBrand">Mobile Brand *</label>
                  <select
                    id="mobileBrand"
                    name="mobileBrand"
                    value={formData.mobileBrand}
                    onChange={handleInputChange}
                    className={`enhanced-select ${errors.mobileBrand ? "error" : ""}`}
                  >
                    <option value="">Select Brand</option>
                    {Object.keys(mobileBrands).map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  {errors.mobileBrand && <span className="error-message">{errors.mobileBrand}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="mobileModel">Mobile Model *</label>
                  <select
                    id="mobileModel"
                    name="mobileModel"
                    value={formData.mobileModel}
                    onChange={handleInputChange}
                    disabled={!formData.mobileBrand}
                    className={`enhanced-select ${errors.mobileModel ? "error" : ""}`}
                  >
                    <option value="">Select Model</option>
                    {formData.mobileBrand &&
                      mobileBrands[formData.mobileBrand].map((model) => (
                        <option key={model} value={model}>
                          {model}
                        </option>
                      ))}
                  </select>
                  {errors.mobileModel && <span className="error-message">{errors.mobileModel}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issueType">Issue Type *</label>
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleInputChange}
                  className={`enhanced-select ${errors.issueType ? "error" : ""}`}
                >
                  <option value="">Select Issue Type</option>
                  {issueTypes.map((issue) => (
                    <option key={issue} value={issue}>
                      {issue}
                    </option>
                  ))}
                </select>
                {errors.issueType && <span className="error-message">{errors.issueType}</span>}
              </div>

              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="customIssue"
                  checked={customIssueVisible}
                  onChange={(e) => setCustomIssueVisible(e.target.checked)}
                />
                <label htmlFor="customIssue">My issue is not listed above</label>
              </div>

              {customIssueVisible && (
                <div className="form-group">
                  <label htmlFor="customIssueText">Describe Your Issue</label>
                  <textarea
                    id="customIssueText"
                    name="customIssue"
                    value={formData.customIssue}
                    onChange={handleInputChange}
                    placeholder="Describe your issue (max 500 characters)"
                    maxLength="500"
                    rows="2"
                  ></textarea>
                  <p className="char-count">{formData.customIssue.length}/500</p>
                </div>
              )}

              {loading && (
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <p className="progress-text">Processing your request... {progress}%</p>
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Processing..." : "Submit Issue"}
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowSuccessModal(false)}>
              ✕
            </button>
            <div className="success-icon">✓</div>
            <h2 className="success-title">Success!</h2>
            <p className="success-subtitle">Your issue has been registered</p>

            <div className="tracking-id-box">
              <p className="tracking-label">Your Tracking ID</p>
              <p className="tracking-number">{trackingId}</p>
              <button
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText(trackingId)
                  onShowToast("Tracking ID copied!", "success")
                }}
              >
                Copy ID
              </button>
            </div>

            <p className="success-message">Our staff will reach you ASAP at the provided address.</p>

            <button
              className="close-success-btn"
              onClick={() => {
                setShowSuccessModal(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  address: "",
                  mobileBrand: "",
                  mobileModel: "",
                  issueType: "",
                  customIssue: "",
                })
                setErrors({})
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default NewEntryIssue;