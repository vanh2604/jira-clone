import React from 'react';
import { Route } from 'react-router-dom';

export const UserLoginSignUp = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propRoute) => {
        return (
          <>
            <Component {...propRoute} />
          </>
        );
      }}
    />
  );
};
