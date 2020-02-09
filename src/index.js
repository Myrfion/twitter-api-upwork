import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import store from "./store"

import "./styles/tailwind.css"
import MainPage from "./pages/MainPage"
import SearchResultPage from "./pages/SearchResultPage"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:keyword" component={SearchResultPage} />
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
