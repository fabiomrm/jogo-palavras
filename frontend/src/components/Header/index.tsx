import './styles.css';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="title-container">
        <h1>TERMO</h1>
      </div>
      <nav className="nav-container">
        <ul>
          <li>SUGERIR</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </header>
  );
};
