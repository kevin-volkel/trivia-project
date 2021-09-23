import React from 'react'
import { Switch, Route } from "react-router";
import {pages} from './util/consts'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

function App() {
  return <>
  <Navbar />
    <Switch>
      <Route exact path = "/">
        <Home />
      </Route>
      {pages.filter((page) => page.text !== 'trivia')
      .map( (page) => {
        const {url, component, id} = page;
        return <Route key = {id} path = {url}>
          {component}
        </Route>
      })}
    </Switch>
  </>;
}

export default App;
