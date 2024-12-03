import React from 'react';
import { ProCard } from '@ant-design/pro-components';
import { Statistic, Spin } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { useDashboard } from '@/hooks/useDashboard';

const Dashboard: React.FC = () => {
  const { loading, statistics } = useDashboard();

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <ProCard
        title="数据概览"
        extra="更多"
        split={'vertical'}
        headerBordered
        bordered
        loading={loading}
      >
        <ProCard split="horizontal">
          <ProCard split="vertical">
            <ProCard title="今日销售额" colSpan="50%">
              <Statistic
                value={statistics?.todaySales}
                precision={2}
                suffix="万"
                valueStyle={{ color: '#3f8600' }}
                prefix={<>¥<ArrowUpOutlined /></>}
              />
            </ProCard>
            <ProCard title="今日订单数">
              <Statistic
                value={statistics?.todayOrders}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix="单"
              />
            </ProCard>
          </ProCard>
          <ProCard split="vertical">
            <ProCard title="本月销售额" colSpan="50%">
              <Statistic
                value={statistics?.monthSales}
                precision={2}
                suffix="万"
                valueStyle={{ color: '#3f8600' }}
                prefix={<>¥<ArrowUpOutlined /></>}
              />
            </ProCard>
            <ProCard title="本月订单数">
              <Statistic
                value={statistics?.monthOrders}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix="单"
              />
            </ProCard>
          </ProCard>
        </ProCard>
      </ProCard>
    </div>
  );
};

export default Dashboard; 