import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DrawerHOC from './components/DrawerHOC/DrawerHOC';
import LoadingComponent from './components/loading/Loading';
import { ADD_HISTORY } from './constant/type';
import Authenticated from './pages/Authenticated/Authenticated';
import Unauthenticated from './pages/Unauthenticated/Unauthenticated';

function App() {
  const { user } = useSelector((state) => state.userLoginReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: ADD_HISTORY,
      payload: history,
    });
  }, []);

  return (
    <>
      <LoadingComponent />
      <DrawerHOC />
      {user ? <Authenticated /> : <Unauthenticated />}
    </>
  );
}

export default App;
