import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";


import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../../../public/images/logo.png";
import User from "../../../public/images/user.png"


const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}
const items = [
  getItem("Dahsboard", "/", <PieChartOutlined />),
  getItem("Customer", "/customer", <DesktopOutlined />),
  getItem("Product", "/product", <DesktopOutlined />),
  getItem("About", "/about", <DesktopOutlined />),
  getItem("User", "/user", <UserOutlined />, [
    getItem("User", "/user/list"),
    getItem("Roe", "/user/role"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const MainLayout = () => {
  const navigate = useNavigate(); // link to key , key = link url | navigate("/about") : link to about page | navigate(item.key)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(item) => navigate(item.key)}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}

        <div className="flex justify-between items-center py-4 px-5 bg-white mb-3">
          <div className="flex gap-2">
            <img src={Logo} className="size-[60px] rounded-full" alt="" />
            <div>
              <h1 className="text-2xl font-bold text-gray-600">SMN</h1>
              <p>Build IT Skill</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-600">Caramel</h1>
              <p className="text-[18px] font-semibold text-gray-600">Admin</p>
            </div>
            <img src={User} className="size-[60px] rounded-[10px]" alt="" />
          </div>
        </div>

        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} /> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'

// const MainLayout = () => {
//   return (
//     <div>
//         <h1 className='text-5xl font-bold text-sky-600 mt-7'>MainLayout</h1>
//         <div className='text-4xl font-bold text-gray-600 mt-5 ml-20 cursor-pointer flex gap-4'>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/register">Register</Link>
//             <Link to="/invoice">Invoice</Link>
//         </div>
//         <div className='w-full h-[600px] bg-gray-300'>
//             <Outlet/>
//         </div>
//         <footer>
//             <h1 className='text-4xl font-bold text-sky-600 text-center w-full p-5 bg-gray-600 '>Footer</h1>
//         </footer>
//     </div>
//   )
// }

// export default MainLayout
