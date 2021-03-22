import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ROUTE } from '../../constant/routing';
import { HomeTemplate } from '../../template/HomeTemplate';
import Home from '../Home/Home';
import Project from '../Project/Project';
import ProjectManagement from '../ProjectManagement/ProjectManagement';

const Authenticated = () => {
  return (
    <Switch>
      <HomeTemplate exact path="/" Component={ProjectManagement} />
      <HomeTemplate exact path={ROUTE.PROJECT} Component={Home} />
      <HomeTemplate exact path={ROUTE.PROJECT_DETAIL} Component={Home} />
      <HomeTemplate exact path={ROUTE.CREATE_PROJECT} Component={Project} />
      <HomeTemplate
        exact
        path={ROUTE.PROJECT_MANAGEMENT}
        Component={ProjectManagement}
      />
      <Route path="*">
        <Redirect to={ROUTE.PROJECT_MANAGEMENT} />
      </Route>
    </Switch>
  );
};

export default Authenticated;
