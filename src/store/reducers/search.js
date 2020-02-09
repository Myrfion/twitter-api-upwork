import { KEYWORD_UPDATE } from "../constants/search"

const initState = {
  keyword: "",
  result: [
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    },
    {
      date: "Sat Feb 08 16:50:17 +0000 2020",
      name: "Donald J Trump",
      accountName: "@realDonaldTrump",
      text:
        "….The LameStream Media, which is The Enemy of the People, is workin overtime with made up stories in order to drive dissension and distrust!",
      comments: 5300,
      retweets: 7839,
      image: "http://abs.twimg.com/images/themes/theme1/bg.png"
    }
  ]
}

function search(state = initState, action) {
  switch (action.type) {
    case KEYWORD_UPDATE:
      return { ...state, keyword: action.payload }
    default:
      return state
  }
}

export default search
