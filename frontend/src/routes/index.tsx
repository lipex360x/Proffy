import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'

const Routes = () => (
  <Switch>
    <Route path="/" component={Landing} exact />
    <Route path="/teachers" component={TeacherForm} exact />
    <Route path="/studies" component={TeacherList} exact />
  </Switch>
)

export default Routes
