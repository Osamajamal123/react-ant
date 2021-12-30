import "./style.css";
import { DatePicker } from 'antd';
import { Button } from 'antd';
import {  Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {DoubleRightOutlined} from '@ant-design/icons'
import {DoubleLeftOutlined} from '@ant-design/icons'
import { Divider } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {  Space, Upload, Popconfirm } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import React, { useState } from 'react';
import { Cascader } from 'antd';
import { Input, AutoComplete } from 'antd';
// import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {  Dropdown,  } from 'antd';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { Header, Content, Footer } = Layout;

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  function onChange(value) {
    console.log(value);
  }
  const options = [

  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const Antreact=()=>{
    return(
        <div>
<DatePicker />
<Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />} href="https://www.google.com" />
    <br />
    <br />
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="primary" shape="circle" size="large">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />} size="large">
      Search
    </Button>
    <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
    <Button type="primary" danger>
      Primary
    </Button>
    <Button danger>Default</Button>
    <Button type="dashed" danger>
      Dashed
    </Button>
    <Button type="text" danger>
      Text
    </Button>
    <Button type="link" danger>
      Link
    </Button>
    <DoubleRightOutlined />
    <DoubleLeftOutlined />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left">Left Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right">Right Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        {new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>,
  <Space>
      Space
      <Button type="primary">Button</Button>
      <Upload>
        <Button>
          <UploadOutlined /> Click to Upload
        </Button>
      </Upload>
      <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
    <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
  <Pagination defaultCurrent={1} total={100} />
  <Steps>
    <Step status="finish" title="Login" icon={<UserOutlined />} />
    <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
    <Step status="process" title="Pay" icon={<LoadingOutlined />} />
    <Step status="wait" title="Done" icon={<SmileOutlined />} />
  </Steps>,
  <Cascader options={options} onChange={onChange} placeholder="Please select" />   

</div>
    )
}
export default Antreact;