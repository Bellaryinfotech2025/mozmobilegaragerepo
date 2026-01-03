const Toast = ({ message, type = "success" }) => {
  const toastClass = type === "success" ? "toast-success" : type === "error" ? "toast-error" : "toast-info"

  return <div className={`toast ${toastClass}`}>{message}</div>
}

export default Toast
