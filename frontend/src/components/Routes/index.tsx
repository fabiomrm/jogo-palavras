import { Header } from 'components/Header';
import { Private } from 'components/Private';
import { Admin } from 'pages/Admin';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { BrowserRouter, Routes as RoutesDOM, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesDOM>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <Private>
              <Admin />
            </Private>
          }
        />
      </RoutesDOM>
    </BrowserRouter>
  );
};
