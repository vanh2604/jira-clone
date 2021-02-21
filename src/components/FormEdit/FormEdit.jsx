import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Col, Form, Input, Row, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { PROJECT_CATEGORY_API, UPDATE_PROJECT_API } from '../../constant/type';

const FormEdit = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { projectCategory, projectEditing } = useSelector(
    (state) => state.projectReducer
  );

  // update form
  useEffect(() => form.resetFields(), [projectEditing]);

  const onFinish = (values) => {
    const description =
      values.description?.level?.content || values.description;
    const projectInfo = {
      ...values,
      categoryId: values.categoryId.toString(),
      description,
    };
    dispatch({
      type: UPDATE_PROJECT_API,
      newProject: projectInfo,
      projectId: projectEditing.id,
    });
  };

  useEffect(() => {
    dispatch({ type: PROJECT_CATEGORY_API });
  }, []);

  return (
    <Form
      initialValues={{
        categoryId: projectEditing.categoryId,
        projectName: projectEditing.projectName,
        id: projectEditing.id,
        description: projectEditing.description,
      }}
      form={form}
      onFinish={onFinish}
      layout="vertical"
      hideRequiredMark
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="id"
            label="Project id"
            rules={[{ required: true, message: 'Please enter project id' }]}
          >
            <Input disabled placeholder="Please enter project id" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="projectName"
            label="Project name"
            rules={[{ required: true, message: 'Please enter project name' }]}
          >
            <Input placeholder="Please enter project name" />
          </Form.Item>
        </Col>
        <Col span={8}>
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
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'please enter project description',
              },
            ]}
          >
            <Editor
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
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormEdit;
