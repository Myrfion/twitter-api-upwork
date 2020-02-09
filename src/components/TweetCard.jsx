import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"
import numeral from "numeral"
import { CommentOutlined, RepeatOutlined } from "@material-ui/icons"

const dateFormat = "MMM d, uuuu"
const numFormat = "0.0a"

function TweetCard(props) {
  const { date, name, accountName, text, comments, retweets, image } = props

  const formatedDate = format(new Date(date), dateFormat)
  const formatedComments = numeral(comments).format(numFormat)
  const formatedRetweets = numeral(retweets).format(numFormat)

  return (
    <div className="bg-white rounded-lg py-5 px-4 shadow-sm">
      <div className="flex">
        <img
          src={image}
          alt="asad"
          style={{ height: 58, width: 58, borderRadius: "50%" }}
        />
        <div className="flex flex-col ml-3">
          <p className="font-bold text-lg">{name}</p>
          <p className="text-sm">{accountName}</p>
        </div>
        <p className="text-xs ml-auto">{formatedDate}</p>
      </div>
      <p className="text-sm mt-3">{text}</p>
      <div className="flex mt-5">
        <div className="flex items-center mr-8">
          <CommentOutlined style={{ fontSize: 16 }} className="mr-2" />
          <p className="text-xs">{formatedComments}</p>
        </div>
        <div className="flex items-center">
          <RepeatOutlined style={{ fontSize: 16 }} className="mr-2" />
          <p className="text-xs">{formatedRetweets}</p>
        </div>
      </div>
    </div>
  )
}

TweetCard.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
}

export default TweetCard
