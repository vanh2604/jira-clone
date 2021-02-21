import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import KanbanBoard from '../../components/kanban-board/KanbanBoard';
import { ROUTE } from '../../constant/routing';
import { HomeTemplate } from '../../template/HomeTemplate';
import Project from '../Project/Project';
import ProjectManagement from '../ProjectManagement/ProjectManagement';

const Authenticated = () => {
  return (
    <Switch>
      <HomeTemplate exact path={ROUTE.HOME} Component={KanbanBoard} />
      <HomeTemplate exact path={ROUTE.PROJECT} Component={Project} />
      <HomeTemplate
        exact
        path={ROUTE.PROJECT_MANAGEMENT}
        Component={ProjectManagement}
      />
      <Route path="*">
        <Redirect to={ROUTE.HOME} />
      </Route>
    </Switch>
  );
};

export default Authenticated;
