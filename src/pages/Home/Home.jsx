import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import KanbanBoard from '../../components/kanban-board/KanbanBoard';
import { GET_PROJECT_DETAIL_API } from '../../constant/type';

const Home = () => {
  const { projectId } = useParams();
  const history = useHistory();
  const { isLoading } = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (projectId) {
      localStorage.setItem('projectId', projectId);
      dispatch({ type: GET_PROJECT_DETAIL_API, projectId });
    } else {
      history.push(`/project/${localStorage.getItem('projectId')}`);
    }
  }, []);
  if (isLoading) {
    return <div />;
  }
  return (
    <div>
      <KanbanBoard />
    </div>
  );
};

export default Home;
