export interface LoginParams {
  username: string;
  password: string;
}

export interface UserInfo {
  id: string;
  username: string;
  name: string;
  avatar?: string;
  roles: string[];
} 