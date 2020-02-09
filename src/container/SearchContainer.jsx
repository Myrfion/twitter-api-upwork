/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import SearchInput from "../components/SearchInput"
import { updateKeyword } from "../store/actions/search"

function SearchContainer(props) {
  const { keyword, onKeywordChange } = props

  return (
    <SearchInput
      keyword={keyword}
      onKeywordChange={onKeywordChange}
      {...props}
    />
  )
}

function mapStateToProps(state) {
  return {
    keyword: state.search.keyword
  }
}

SearchContainer.propTypes = {
  keyword: PropTypes.string.isRequired,
  onKeywordChange: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { onKeywordChange: updateKeyword })(
  SearchContainer
)
