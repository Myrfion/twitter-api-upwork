import { KEYWORD_UPDATE } from "../constants/search"

// eslint-disable-next-line import/prefer-default-export
export function updateKeyword(keyword) {
  return async dispatch => {
    dispatch({
      type: KEYWORD_UPDATE,
      payload: keyword
    })
  }
}
