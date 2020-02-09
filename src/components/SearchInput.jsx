/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
import { TextField, InputAdornment, withStyles } from "@material-ui/core"
import Autocomplete from "@material-ui/lab/Autocomplete"
import SearchIcon from "@material-ui/icons/Search"
import COLORS from "../styles/colors"

const TextFieldStyles = withStyles({
  root: {
    margin: 0,

    "& label.Mui-focused": {
      color: COLORS.gray
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLORS.gray
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.5rem !important",
      height: 50,
      lineHeigth: 50,
      padding: "0 8px",
      "& fieldset": {
        borderColor: COLORS.gray
      },
      "&:hover fieldset": {
        borderColor: COLORS.gray
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.gray
      }
    }
  }
})(TextField)

function SearchInput(props) {
  const { className, keyword, onKeywordChange } = props

  return (
    <Autocomplete
      className={className}
      freeSolo
      disableClearable
      // options={top100Films.map(option => option.title)}
      value={keyword}
      onSelectCapture={e => onKeywordChange(e.target.value)}
      renderInput={params => (
        <TextFieldStyles
          {...params}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={event => onKeywordChange(event.target.value)}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ fontSize: 20 }} />
              </InputAdornment>
            ),
            type: "search"
          }}
        />
      )}
    />
  )
}

SearchInput.propTypes = {
  className: PropTypes.string,
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func.isRequired
}

SearchInput.defaultProps = {
  className: "",
  keyword: ""
}

export default SearchInput
