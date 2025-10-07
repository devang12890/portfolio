import { Link } from 'react-scroll';

const Header = ({ scrolled, mobileMenuOpen, onToggleMobile, onCloseMobile }) => {
  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="home" className="logo" onClick={onCloseMobile}>
          <div className="logo-icon">D</div>
          Devang
        </Link>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="nav-link"
              onClick={onCloseMobile}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="contact-btn"
            onClick={onCloseMobile}
          >
            Contact
          </Link>
        </nav>

        <div 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={onToggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
