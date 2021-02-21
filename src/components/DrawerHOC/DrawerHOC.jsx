import React from 'react';
import { Drawer, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_DRAWER } from '../../constant/type';

const DrawerHOC = () => {
  const { isVisible, title, Component } = useSelector(
    (state) => state.drawerReducer
  );
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({ type: CLOSE_DRAWER });
  };
  return (
    <Drawer
      title={title}
      width={720}
      onClose={onClose}
      visible={isVisible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
        </div>
      }
    >
      {Component}
    </Drawer>
  );
};

export default DrawerHOC;
