import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Кафедра КІТ
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Головна</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Про сайт</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Галерея</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">Новини</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">Контакти</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;