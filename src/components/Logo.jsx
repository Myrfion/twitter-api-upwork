import React from "react"
import PropTypes from "prop-types"
import LogoImage from "../assets/logo.svg"

function Logo(props) {
  const { className, fontSize, imageHeight } = props

  const textClassName = "uppercase font-bold"

  return (
    <div className={`flex items-center h-full ${className}`}>
      <h1 className={`${textClassName} mr-4`} style={{ fontSize }}>
        tweet
      </h1>
      <img src={LogoImage} alt="logo" style={{ height: imageHeight }} />
      <h1 className={`${textClassName} ml-4`} style={{ fontSize }}>
        search
      </h1>
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired
}

Logo.defaultProps = {
  className: ""
}

export default Logo
