import { Button, Input, Form, Select } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_PROJECT_API, PROJECT_CATEGORY_API } from '../../constant/type';

const Project = () => {
  const dispatch = useDispatch();
  const { projectCategory } = useSelector((state) => state.projectReducer);

  const onFinish = (values) => {
    const description = values.description.level.content;
    const projectInfo = { ...values, description };
    dispatch({ type: CREATE_PROJECT_API, newProject: projectInfo });
  };

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch({ type: PROJECT_CATEGORY_API });
  }, []);

  return (
    <div className="container">
      <div className="page">
        <div className="header">
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb"
              style={{
                backgroundColor: 'white',
                marginBottom: 0,
                paddingLeft: 0,
              }}
            >
              <li className="breadcrumb-item">Project</li>
              <li className="breadcrumb-item">CyberLearn</li>
              <li className="breadcrumb-item active" aria-current="page">
                Create project
              </li>
            </ol>
          </nav>
        </div>
        <h3>Create project</h3>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          initialValues={{ categoryId: 1 }}
        >
          <Form.Item
            label="Name"
            name="projectName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="URL"
            name="alias"
            rules={[{ required: true, message: 'Please input your URL!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input your project description',
              },
            ]}
          >
            <Editor
              initialValue="<p>Enter your project description</p>"
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                  // eslint-disable-next-line no-multi-str
                  'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent | removeformat | help',
              }}
            />
          </Form.Item>

          <Form.Item name="categoryId" label="Category">
            <Select allowClear>
              {projectCategory.map((category) => {
                return (
                  <Select.Option key={category.id} value={category.id}>
                    {category.projectCategoryName}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Create project
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Project;
