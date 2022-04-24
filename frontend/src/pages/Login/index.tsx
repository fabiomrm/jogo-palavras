import { useAuth } from 'contexts/AuthContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'utils/requests';
import { saveAuthData } from 'utils/storage';
import { getTokenData } from 'utils/token';

import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
};

export const Login = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const { authContextData, setAuthContextData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CredentialsDTO>();

  const onSubmit = (formData: CredentialsDTO) => {
    requestBackendLogin(formData).then((res) => {
      saveAuthData(res.data);
      setHasError(false);
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
        roles: getTokenData()?.authorities
      });
    });
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && <div className="alert alert-danger">Erro ao tentar efetuar login</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="login-form-input-area">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
            name="username"
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
          />
        </div>
        <div className="login-form-input-area">
          <input
            {...register('password', {
              required: 'Campo obrigatório'
            })}
            type="password"
            className={`form-control base-input  ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
            name="password"
          />
        </div>
        <div className="login-submit">
          <button>Fazer login</button>
        </div>
      </form>
    </div>
  );
};
