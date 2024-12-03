import { LoginParams, UserInfo } from '@/types/user';
import { StatisticsData } from '@/types/dashboard';
import http from '@/utils/request';

export const userApi = {
  login: (params: LoginParams) => http.post<UserInfo>('/auth/login', params),
  getUserInfo: () => http.get<UserInfo>('/user/info'),
} as const;

export const dashboardApi = {
  getStatistics: () => http.get<StatisticsData>('/dashboard/statistics'),
} as const; 