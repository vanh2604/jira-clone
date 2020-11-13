import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';

export default function FlashMessage() {
  const { messageArray } = useSelector((state) => state.messageReducer);
  return (
    <div className="floating-alerts">
      {messageArray.map((msg, index) => {
        return (
          <Alert
            key={index}
            style={{ position: 'absolute' }}
            className="floating-alert"
            message="Success Tips"
            description={msg}
            type="success"
            showIcon
          />
        );
      })}
    </div>
  );
}
