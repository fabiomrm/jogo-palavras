import { Header } from 'components/Header';
import { Home } from 'pages/Home';
import { BrowserRouter, Routes as RoutesDOM, Route } from 'react-router-dom';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesDOM>
        <Route path="/" element={<Home />} />
      </RoutesDOM>
    </BrowserRouter>
  );
};
