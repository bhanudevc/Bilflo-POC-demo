import { Layout, Menu } from 'antd';
import {
  DollarCircleFilled,
  PaperClipOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './side-menu.scss';

const { Sider, Content, Header } = Layout;


/* eslint-disable-next-line */
export interface SideMenuProps {}

export function SideMenu({ children }: { children: React.ReactNode }) {
  const {SubMenu} = Menu;

  const handleClick = (e:any) => {
    console.log("click ", e);
  };

  return (
    <>
      <Header className="header custome-header">
          <div className='bilflo'>BILFLO</div>
      </Header>
    <Layout className="layout custome-layout">
    <Sider
        trigger={null}
        collapsible
        className="main-page"
      >
        <Menu
        onClick={handleClick}
        style={{ width: 200 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="billing" icon={<DollarCircleFilled />} title="Billing">
        <Menu.Item key="1">
            <Link to="/billing"> Billing</Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link to="/billing"> Jobs</Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/billing"> Contract</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="reports" icon={<PaperClipOutlined />} title="Reports">
          <Menu.Item key="4">
            <Link to="/reports"> Matrics Report</Link>
            </Menu.Item>
            <Menu.Item key="5">
            <Link to="/reports"> Payroll Reports</Link>
          </Menu.Item>
        </SubMenu>
        </Menu>
      </Sider>
      <Layout className="main-page">
        <Content
          className="main-layout-background"
          style={{
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
    </>
  );
}

export default SideMenu;
