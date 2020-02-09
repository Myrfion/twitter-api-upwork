import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Logo from "../components/Logo"
import SearchButton from "../components/SearchButton"
import SearchContainer from "../container/SearchContainer"

function MainPage(props) {
  const { keyword, history } = props

  return (
    <div className="flex flex-col items-center w-full min-h-screen tw-pt-16pr">
      <Logo fontSize={36} imageHeight={70} />
      <SearchContainer className="my-8 w-3/4 lg:tw-w-820px" />
      <SearchButton
        disabled={keyword.length === 0}
        onClick={() => history.push(`/${keyword}`)}
      />
    </div>
  )
}

MainPage.propTypes = {
  keyword: PropTypes.string,
  history: PropTypes.instanceOf(Object).isRequired
}

MainPage.defaultProps = {
  keyword: ""
}

function mapStateToProps(state) {
  return {
    keyword: state.search.keyword
  }
}

export default connect(mapStateToProps)(MainPage)
