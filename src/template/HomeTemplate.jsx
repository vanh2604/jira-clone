import React from 'react';
import { Route } from 'react-router-dom';
import Menu from '../components/menu/Menu';
import InfoModal from '../components/modal/InfoModal';
import SearchModal from '../components/modal/SearchModal';
import Sidebar from '../components/sidebar/Sidebar';

export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div className="jira">
            <InfoModal />
            <SearchModal />
            <Sidebar />
            <Menu />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
};
