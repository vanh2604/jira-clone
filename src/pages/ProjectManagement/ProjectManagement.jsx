import { Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './projectManagement.module.css';
import { columnConfig } from './tableConfig';

const ProjectManagement = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const { projectList } = useSelector((state) => state.projectReducer);
  const { userList } = useSelector((state) => state.userReducer);
  const [tableValue, setTableValue] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (pagination, filters, sorter) => {
    setTableValue({
      ...tableValue,
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  // let { sortedInfo, filteredInfo } = tableValue;
  // sortedInfo = sortedInfo || {};
  // filteredInfo = filteredInfo || {};

  const onSearch = (value) => {
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      dispatch({ type: 'GET_ALL_USER_API', keyword: value });
    }, 300);
  };

  const columns = columnConfig(
    dispatch,
    onSearch,
    userList,
    searchValue,
    setSearchValue
  );

  useEffect(() => {
    dispatch({ type: 'GET_ALL_PROJECT_API' });
  }, []);

  return (
    <div className={styles.page}>
      <h3>Project Management</h3>
      <Table
        rowKey="id"
        pagination={{ pageSize: 8 }}
        columns={columns}
        dataSource={projectList}
        onChange={handleChange}
        tableLayout="fixed"
      />
    </div>
  );
};

export default ProjectManagement;
