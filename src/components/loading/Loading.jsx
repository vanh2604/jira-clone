import React from 'react';
import { useSelector } from 'react-redux';
import styleLoading from './loading.module.css';

export default function LoadingComponent() {
  const { isLoading } = useSelector((state) => state.loadingReducer);

  if (isLoading) {
    return (
      <div className={styleLoading.bgLoading}>
        <img src="/img/loading.gif" alt="Loading" />
      </div>
    );
  }
  return '';
}
