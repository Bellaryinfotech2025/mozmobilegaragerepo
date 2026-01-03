"use client"

import { useState } from "react"
import NewEntryIssue from "../mozcomponent/newentryissue"
import TrackingIdStatus from "../mozcomponent/trackingidstatus"

const SelectionWrapper = ({ onShowToast }) => {
  const [activeTab, setActiveTab] = useState("entry")

  return (
    <main className="main-content">
      <div className="selection-bg"></div>

      <div className="tab-wrapper">
        <div className="tab-buttons">
          <button className={`tab-btn ${activeTab === "entry" ? "active" : ""}`} onClick={() => setActiveTab("entry")}>
            New Issue Entry
          </button>
          <button
            className={`tab-btn ${activeTab === "tracking" ? "active" : ""}`}
            onClick={() => setActiveTab("tracking")}
          >
            Tracking Entry Status
          </button>
          <div className={`tab-indicator ${activeTab === "entry" ? "left" : "right"}`}></div>
        </div>

        <div className="tab-content">
          {activeTab === "entry" && <NewEntryIssue onShowToast={onShowToast} />}
          {activeTab === "tracking" && <TrackingIdStatus onShowToast={onShowToast} />}
        </div>
      </div>
    </main>
  )
}

export default SelectionWrapper
