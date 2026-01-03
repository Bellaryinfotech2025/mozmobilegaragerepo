"use client"

import { useState } from "react"
import axios from "axios"

const apiUrl = "https://mozbackend.bellaryinfotech.com/api/issues"

const TrackingIdStatus = ({ onShowToast }) => {
  const [showModal, setShowModal] = useState(false)
  const [trackingIdInput, setTrackingIdInput] = useState("")
  const [trackingData, setTrackingData] = useState(null)
  const [showProgress, setShowProgress] = useState(false)

  const statusColors = {
    Pending: "#f59e0b",
    "In Progress": "#3b82f6",
    "In Journey": "#8b5cf6",
    Completed: "#10b981",
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    setShowProgress(true)

    try {
      const response = await axios.get(`${apiUrl}/${trackingIdInput.toUpperCase()}`)
      const data = response.data
      setTrackingData({
        trackingId: data.trackingId,
        mobileBrand: data.mobileBrand,
        issueType: data.issueType,
        status: data.status || "Pending",  // Assume status is in DB; default to Pending if not
        progress: data.progress || 0,      // Assume progress is in DB; default to 0 if not
      })
      setShowProgress(false)
      onShowToast("Tracking information found!", "success")
    } catch (error) {
      setTrackingData(null)
      setShowProgress(false)
      if (error.response && error.response.status === 404) {
        onShowToast("Tracking ID not found. Please create a new issue.", "error")
      } else {
        onShowToast("Error fetching status. Please try again.", "error")
      }
    }
  }

  return (
    <div className="tracking-container">
      <button className="tracking-btn" onClick={() => setShowModal(true)}>
        🔍 Check Status
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>
            <h2 className="modal-title">Track Your Repair</h2>
            <p className="modal-subtitle">Enter your Tracking ID</p>

            <form onSubmit={handleSearch} className="tracking-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="e.g., M-V-G-ABC123XYZ"
                  value={trackingIdInput}
                  onChange={(e) => setTrackingIdInput(e.target.value.toUpperCase())}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" disabled={showProgress}>
                {showProgress ? "Searching..." : "Search"}
              </button>
            </form>

            {showProgress && (
              <div className="progress-container">
                <div className="spinner"></div>
                <p className="progress-text">Searching your repair status...</p>
              </div>
            )}

            {trackingData && !showProgress && (
              <div className="tracking-results">
                <h3>Repair Status</h3>

                <div className="repair-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${trackingData.progress}%` }}></div>
                  </div>
                  <p className="progress-label">{trackingData.progress}% Complete</p>
                </div>

                <table className="status-table">
                  <tbody>
                    <tr>
                      <td className="table-label">Tracking ID</td>
                      <td className="table-value">{trackingData.trackingId}</td>
                    </tr>
                    <tr>
                      <td className="table-label">Mobile Brand</td>
                      <td className="table-value">{trackingData.mobileBrand}</td>
                    </tr>
                    <tr>
                      <td className="table-label">Issue Type</td>
                      <td className="table-value">{trackingData.issueType}</td>
                    </tr>
                    <tr>
                      <td className="table-label">Current Status</td>
                      <td className="table-value">
                        <span
                          className="status-badge"
                          style={{
                            backgroundColor: statusColors[trackingData.status],
                          }}
                        >
                          {trackingData.status}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TrackingIdStatus;