import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { LoginParams, UserInfo } from '@/types/user';
import { userApi } from '@/services';
import { useRequest } from './useRequest';

export const useAuth = () => {
  const navigate = useNavigate();
  
  const { loading, run: login } = useRequest<UserInfo, [LoginParams]>(userApi.login, {
    onSuccess: (userInfo) => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      message.success('登录成功！');
      navigate('/dashboard');
    },
  });

  const logout = async () => {
    localStorage.clear();
    navigate('/login');
  };

  return {
    login,
    logout,
    loading,
  };
}; 