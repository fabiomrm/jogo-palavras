type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
};
const TOKEN_KEY = 'authData';

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(obj));
};

export const getAuthData = (): LoginResponse => {
  const str = localStorage.getItem(TOKEN_KEY) ?? '{}';

  return JSON.parse(str);
};

export const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
};
