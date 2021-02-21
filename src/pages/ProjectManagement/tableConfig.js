/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FormOutlined, DeleteOutlined } from '@ant-design/icons';
import {
  Tag,
  Popconfirm,
  Avatar,
  Button,
  Popover,
  AutoComplete,
  Input,
} from 'antd';
import {
  OPEN_DRAWER_COMPONENT,
  SET_PROJECT_EDIT,
  DELETE_PROJECT_API,
  ADD_MEMBER_API,
  REMOVE_MEMBER_API,
} from '../../constant/type';
import FormEdit from '../../components/FormEdit/FormEdit';

export const columnConfig = (
  dispatch,
  onSearch,
  userList,
  searchValue,
  setSearchValue
) => {
  return [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      fixed: true,
      width: 100,
      sorter: (next, current) => {
        return next.id - current.id;
      },
    },
    {
      title: 'Project name',
      dataIndex: 'projectName',
      key: 'projectName',
      sorter: (next, current) => {
        const project2 = next.projectName?.trim().toLowerCase();
        const project1 = current.projectName?.trim().toLowerCase();
        if (project2 < project1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
      key: 'categoryName',
      sorter: (next, current) => {
        const project2 = next.categoryName?.trim().toLowerCase();
        const project1 = current.categoryName?.trim().toLowerCase();
        if (project2 < project1) {
          return -1;
        }
        return 1;
      },
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator',
      sorter: (next, current) => {
        const project2 = next.creator?.name?.trim().toLowerCase();
        const project1 = current.creator?.name?.trim().toLowerCase();
        if (project2 < project1) {
          return -1;
        }
        return 1;
      },
      // eslint-disable-next-line no-unused-vars
      render: (text, record, index) => {
        return <Tag color="green">{record.creator?.name}</Tag>;
      },
    },
    {
      title: 'Members',
      key: 'members',
      render: (text, record) => {
        return (
          <div>
            {record?.members.slice(0, 3).map((member, index) => {
              return (
                <Popover
                  key={index}
                  placement="top"
                  title="members"
                  content={() => {
                    return (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>avatar</th>
                            <th>name</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          {record.members?.map((item, indexx) => {
                            return (
                              <tr key={indexx}>
                                <td>{item.userId}</td>
                                <td>
                                  <img
                                    alt=""
                                    src={item.avatar}
                                    width="30"
                                    height="30"
                                    style={{ borderRadius: '15px' }}
                                  />
                                </td>
                                <td>{item.name}</td>
                                <td>
                                  <Button
                                    danger
                                    type="primary"
                                    shape="circle"
                                    onClick={() => {
                                      dispatch({
                                        type: REMOVE_MEMBER_API,
                                        payload: {
                                          projectId: record.id,
                                          userId: item.userId,
                                        },
                                      });
                                    }}
                                  >
                                    <DeleteOutlined />
                                  </Button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    );
                  }}
                >
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    key={index}
                    src={member.avatar}
                  />
                </Popover>
              );
            })}
            {record?.members.length > 3 ? (
              <Avatar>+{record?.members.length - 3}</Avatar>
            ) : null}
            {
              <Popover
                title="Add member"
                placement="topLeft"
                trigger="click"
                content={() => {
                  return (
                    <AutoComplete
                      value={searchValue}
                      style={{ width: '100%' }}
                      onChange={(value) => {
                        setSearchValue(value);
                      }}
                      onSearch={onSearch}
                      onSelect={(value, option) => {
                        setSearchValue(option.label);
                        dispatch({
                          type: ADD_MEMBER_API,
                          payload: { projectId: record.id, userId: value },
                        });
                      }}
                      options={userList?.map((user) => {
                        return {
                          label: user.name,
                          value: user.userId.toString(),
                        };
                      })}
                    >
                      <Input.Search
                        size="medium"
                        placeholder="search members"
                        enterButton
                      />
                    </AutoComplete>
                  );
                }}
              >
                <Button shape="circle">+</Button>
              </Popover>
            }
          </div>
        );
      },
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record) => {
        return (
          <div>
            <button
              onClick={() => {
                dispatch({
                  type: OPEN_DRAWER_COMPONENT,
                  payload: {
                    isVisible: true,
                    title: 'Edit project',
                    Component: <FormEdit />,
                  },
                });
                dispatch({ type: SET_PROJECT_EDIT, payload: record });
              }}
              type="button"
              className="btn mr-2 btn-primary"
            >
              {' '}
              <FormOutlined style={{ fontSize: 17 }} />
            </button>
            <Popconfirm
              title="Are you sure to delete this project?"
              onConfirm={() =>
                dispatch({ type: DELETE_PROJECT_API, projectId: record.id })
              }
              okText="Yes"
              cancelText="No"
            >
              <button type="button" className="btn btn-danger">
                <DeleteOutlined style={{ fontSize: 17 }} />
              </button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
};
