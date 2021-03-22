/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useDispatch } from 'react-redux';
import { OPEN_DRAWER_COMPONENT } from '../../constant/type';
import FormCreateTask from '../FormCreateTask/FormCreateTask';

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sideBar">
      <div className="sideBar-top">
        <div className="sideBar-icon">
          <i className="fab fa-jira" />
        </div>
        <div
          className="sideBar-icon"
          data-toggle="modal"
          data-target="#searchModal"
          style={{ cursor: 'pointer' }}
        >
          <i className="fa fa-search" />
          <span className="title">SEARCH ISSUES</span>
        </div>
        <div
          onClick={() => {
            dispatch({
              type: OPEN_DRAWER_COMPONENT,
              payload: {
                isVisible: true,
                title: 'Create task',
                Component: <FormCreateTask />,
              },
            });
          }}
          className="sideBar-icon"
          style={{ cursor: 'pointer' }}
        >
          <i className="fa fa-plus" />
          <span className="title">CREATE ISSUES</span>
        </div>
      </div>
      <div className="sideBar-bottom">
        <div className="sideBar-icon">
          <i className="fa fa-question-circle" />
          <span className="title">ABOUT</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
