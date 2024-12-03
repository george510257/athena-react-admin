import { useEffect } from 'react';
import { dashboardApi } from '@/services';
import { useRequest } from './useRequest';
import { StatisticsData } from '@/types/dashboard';

export const useDashboard = () => {
  const { 
    data: statistics, 
    loading, 
    run: fetchStatistics,
  } = useRequest<StatisticsData, []>(dashboardApi.getStatistics);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return {
    statistics,
    loading,
    refresh: fetchStatistics,
  };
}; 