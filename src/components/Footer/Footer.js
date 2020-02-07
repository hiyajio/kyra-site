import React from "react"

const Footer = props => {
  return (
    <div className="z-50 fixed bottom-0 right-0 mb-1 mr-1 text-silvered font-body text-xs opacity-25">
      <p>
        &copy; {new Date().getFullYear()} Kyra Buenviaje. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
