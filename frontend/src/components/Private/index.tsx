import { useAuth } from 'contexts/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};
export const Private = ({ children }: Props) => {
  const { authContextData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authContextData.authenticated) {
      navigate('/');
    }
  }, [authContextData, navigate]);

  return <>{children}</>;
};
