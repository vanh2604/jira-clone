import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  SettingOutlined,
  SolutionOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';
import { ROUTE } from '../../constant/routing';

const Menu = () => {
  return (
    <div className="menu">
      <div className="account">
        <div className="avatar">
          <img src="./img/download.jfif" alt="" />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control">
        <div>
          <CreditCardOutlined style={{ fontSize: 17 }} />
          <NavLink
            style={{
              display: 'inline-block',
              marginLeft: '1rem',
              color: '#000',
              fontWeight: 400,
            }}
            to={ROUTE.HOME}
            activeClassName="active font-weight-bold text-primary"
          >
            Kanban Board
          </NavLink>
        </div>
        <div>
          <SettingOutlined style={{ fontSize: 17 }} />
          <NavLink
            style={{
              display: 'inline-block',
              marginLeft: '1rem',
              color: '#000',
              fontWeight: 400,
            }}
            to={ROUTE.PROJECT}
            activeClassName="active font-weight-bold  text-primary"
          >
            Create project
          </NavLink>
        </div>
        <div>
          <SolutionOutlined style={{ fontSize: 17 }} />
          <NavLink
            style={{
              display: 'inline-block',
              marginLeft: '1rem',
              color: '#000',
              fontWeight: 400,
            }}
            to={ROUTE.PROJECT_MANAGEMENT}
            activeClassName="active font-weight-bold  text-primary"
          >
            Project management
          </NavLink>
        </div>
      </div>
      <div className="feature">
        <div>
          <i className="fa fa-truck" />
          <span>Releases</span>
        </div>
        <div>
          <i className="fa fa-equals" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
