import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';
import { useAuth } from '@/hooks/useAuth';

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const { logout } = useAuth();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        background: '#fff',
        boxShadow: '0 2px 8px #f0f1f2'
      }}>
        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
          Athena Admin
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>欢迎，{userInfo.name}</span>
          <LogoutOutlined 
            onClick={logout} 
            style={{ cursor: 'pointer', fontSize: '16px' }} 
          />
        </div>
      </Header>
      <Content style={{ padding: '24px', background: '#f0f2f5' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center', background: '#fff' }}>
        Athena Admin ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout; 