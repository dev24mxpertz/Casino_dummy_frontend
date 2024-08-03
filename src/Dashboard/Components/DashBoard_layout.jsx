import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("All user Profit", "2", <TeamOutlined />),
  getItem("All user Balance", "3", <FileOutlined />),
  getItem("All user Referrals", "4", <TeamOutlined />),
  getItem("All user Rewards", "5", <DesktopOutlined />),
  getItem("All user Activity", "6", <UserOutlined />),
  getItem("All user Statics", "7", <UserOutlined />),
  getItem("AllUser", "8", <TeamOutlined />),
  getItem("All user Payouts", "9", <TeamOutlined />),
  getItem("Total Payouts", "10", <TeamOutlined />),
  getItem("Subscriber", "11", <TeamOutlined />),
  getItem("Slot_Game", "12", <TeamOutlined />),
  getItem("Black_jack", "13", <TeamOutlined />),
  getItem("Roulleta", "14", <TeamOutlined />),
  getItem("Hunt_Game", "15", <TeamOutlined />),
  getItem("Avaiator", "16", <TeamOutlined />),
  getItem("Logout", "17", <FileOutlined />),
];

const DashBoardlayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  useEffect(() => {
    const initialMenuItem = getSelectedMenuItem();
    setSelectedMenuItem(initialMenuItem);
  }, []);

  useEffect(() => {
    handleMenuClick(selectedMenuItem);
  }, [selectedMenuItem]);

  const handleMenuClick = (key) => {
    setSelectedMenuItem(key);
    const paths = {
      1: "/dashboard/dashboard",
      2: "/dashboard/AlluserProfit",
      3: "/dashboard/AlluserBalance",
      4: "/dashboard/AlluserReferrals",
      5: "/dashboard/AlluserRewards",
      6: "/dashboard/AlluserActivity",
      7: "/dashboard/AlluserStatics",
      8: "/dashboard/AllUser",
      9: "/dashboard/AlluserPayouts",
      10: "/dashboard/TotalPayouts",
      11: "/dashboard/Subscriber",
      12: "/dashboard/Slot_Game",
      13: "/dashboard/Black_jack",
      14: "/dashboard/Roulleta",
      15: "/dashboard/Hunt_Game",
      16: "/dashboard/Avaiator",
      17: "/dashboard/Logout",
    };
    navigate(paths[key]);
    setShowSider(false);
  };

  const [collapsed, setCollapsed] = useState(false);
  const [showSider, setShowSider] = useState(false);

  const toggleSider = () => {
    setShowSider(!showSider);
    document.body.style.overflow = showSider ? "auto" : "hidden"; // Disable scrolling when sider is open
  };

  const getMenuHeading = () => {
    const selectedItem = items.find((item) => item.key === selectedMenuItem);
    return selectedItem ? selectedItem.label : "";
  };

  // Define getSelectedMenuItem function to determine the selected menu item based on the current URL path
  const getSelectedMenuItem = () => {
    const paths = {
      "/dashboard/dashboard": "1",
      "/dashboard/AlluserProfit": "2",
      "/dashboard/AlluserBalance": "3",
      "/dashboard/AlluserReferrals": "4",
      "/dashboard/AlluserRewards": "5",
      "/dashboard/AlluserActivity": "6",
      "/dashboard/AlluserStatics": "7",
      "/dashboard/AllUser": "8",
      "/dashboard/AlluserPayouts": "9",
      "/dashboard/TotalPayouts": "10",
      "/dashboard/Subscriber": "11",
      "/dashboard/Slot_Game": "12",
      "/dashboard/Black_jack": "13",
      "/dashboard/Roulleta": "14",
      "/dashboard/Hunt_Game": "15",
      "/dashboard/Avaiator": "16",
      "/dashboard/Logout": "17",
    };

    const currentPath = location.pathname;
    for (const key in paths) {
      if (currentPath.match(key)) {
        return paths[key];
      }
    }
    return "1";
  };

  return (
    <div className="dashbord-bg">
      <Layout style={{ minHeight: "100vh" }} className="bg-transparent">
        <Header className="bg-transparent p-0">
          <div className="d-flex justify-content-between align-items-center header-align">
            <Button
              className="d-md-none toggle-sider"
              icon={<MenuOutlined />}
              onClick={toggleSider}
            >
              <span style={{ color: "white", fontSize: "15px" }}>Slider</span>{" "}
              <MenuOutlined />
            </Button>
          </div>
        </Header>
        <Layout style={{ background: "transparent" }}>
          {showSider && (
            <div className="full-screen-sider">
              <Sider
                style={{ paddingTop: "35px 15px" }}
                className="bg-transparent dash-slider d-block d-md-none w-100 h-100"
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <Menu
                  style={{ marginTop: "35px 10px" }}
                  className="bg-transparent w-100"
                  theme="dark"
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  onClick={({ key }) => handleMenuClick(key)}
                >
                  {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu>
              </Sider>
            </div>
          )}
          <Sider
            style={{ paddingTop: "35px 15px" }}
            className="bg-transparent dash-slider d-none d-md-block"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <Menu
              style={{ marginTop: "35px 10px" }}
              className="bg-transparent"
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              onClick={({ key }) => handleMenuClick(key)}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content
            className="mob-w"
            style={{
              margin: "16px 16px",
              padding: "35px",
              color: "white",
              background: "transparent",
              paddingTop: "0px",
              marginTop: "0px",
            }}
          >
            <div className="Layout_wrapper">
              <div className="Layout_heading ps-4">
                <h1>
                  {items.find((item) => item.key === selectedMenuItem)?.label}
                </h1>
              </div>
              <div className="p-2 pt-0">
                <Outlet />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashBoardlayout;
