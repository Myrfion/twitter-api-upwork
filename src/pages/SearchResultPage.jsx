import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Logo from "../components/Logo"
import SearchContainer from "../container/SearchContainer"
import SearchButton from "../components/SearchButton"
import TweetsGrid from "../components/TweetsGrid"

function SearchResultPage(props) {
  const { searchResult, history, keyword } = props

  return (
    <div className="w-full flex flex-col items-center bg-gray-darker min-h-screen">
      <div className="flex items-center flex-col w-full py-8 bg-white">
        <div className="flex items-center justify-center lg:justify-between w-11/12 flex-wrap">
          <div className="w-full lg:w-auto mb-4 lg:mb-0">
            <Link to="/" className="flex justify-center">
              <Logo fontSize={26} imageHeight={52} />
            </Link>
          </div>
          <SearchContainer className="w-1/2 mr-4 lg:mr-0:" />
          <SearchButton onClick={() => history.push(`/${keyword}`)} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-8">
        <div className="w-11/12">
          <TweetsGrid data={searchResult} />
        </div>
      </div>
    </div>
  )
}

SearchResultPage.propTypes = {
  searchResult: PropTypes.instanceOf(Array).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  keyword: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    searchResult: state.search.result,
    keyword: state.search.keyword
  }
}

export default connect(mapStateToProps)(SearchResultPage)
