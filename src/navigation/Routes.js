import React from 'react'
import {Route, Switch } from 'react-router-dom'
import Statistics from '../pages/Statistics'
const Routes = () => {
  
  return (
    <Switch>
        <Route path={`/`} exact render={()=> <Statistics />} />
    </Switch>
  )
}

export default Routes