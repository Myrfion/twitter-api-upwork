/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { Button, withStyles } from "@material-ui/core"
import COLORS from "../styles/colors"

const SearchButtonStyled = withStyles({
  root: {
    background: COLORS.blue,
    color: COLORS.white,
    "&:hover": {
      backgroundColor: COLORS.blue
    },
    padding: "0.625rem 0"
  }
})(Button)

function SearchButton(props) {
  const { className, ...others } = props

  return (
    <SearchButtonStyled
      className={`tw-w-140px ${className}`}
      variant="contained"
      {...others}
    >
      Search
    </SearchButtonStyled>
  )
}

SearchButton.propTypes = {
  className: PropTypes.string
}

SearchButton.defaultProps = {
  className: ""
}

export default SearchButton
