import { Button, Col, Form, Row, Select } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import React from 'react';

const FormCreateTask = () => {
  const [form] = Form.useForm();
  const children = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 10; i < 36; i++) {
    children.push(
      <Select.Option key={i.toString(36) + i}>
        {i.toString(36) + i}
      </Select.Option>
    );
  }
  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <Form
      initialValues={{
        listUserAssign: ['a10', 'c12'],
      }}
      form={form}
      onFinish={onFinish}
      layout="vertical"
      hideRequiredMark
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item name="categoryId" label="Category">
            <Select allowClear>
              <Select.Option value="projectA">projectA</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="priorityId" label="Priority">
            <Select allowClear>
              <Select.Option value="1">High</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="typeId" label="Task type">
            <Select allowClear>
              <Select.Option value="1">New Task</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="listUserAssign" label="Assignees">
            <Select
              mode="multiple"
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
            >
              {children}
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
                message: 'please enter task description',
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

export default FormCreateTask;
