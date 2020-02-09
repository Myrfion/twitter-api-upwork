/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import TweetCard from "./TweetCard"

function TweetsGrid(props) {
  const { data } = props

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-12 xl:col-gap-24 row-gap-8">
        {data &&
          data.map(item => {
            return <TweetCard {...item} />
          })}
      </div>
    </>
  )
}

TweetsGrid.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired
}

export default TweetsGrid
