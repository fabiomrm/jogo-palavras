import { Children, createContext, useContext, useState } from 'react';
import { Role } from 'types';
import { TokenData } from 'utils/token';

export type AuthContextData = {
  authenticated: boolean;
  tokenData?: TokenData;
  roles?: Role[];
};

export type AuthContextType = {
  authContextData: AuthContextData;
  setAuthContextData: (authContextData: AuthContextData) => void;
};

export const AuthContext = createContext<AuthContextType>({
  authContextData: {
    authenticated: false
  },
  setAuthContextData: () => null
});

type Props = {
  children: React.ReactNode;
};
export const AuthContextProvider = ({ children }: Props) => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false
  });

  const value = {
    authContextData,
    setAuthContextData
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  return auth;
};
