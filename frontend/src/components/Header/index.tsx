import './styles.css';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <header className="header-container">
      <div className="title-container">
        <h1>TERMO</h1>
      </div>
      <div className="login-area">
        <Link to="/login">LOGIN</Link>
      </div>
    </header>
  );
};
