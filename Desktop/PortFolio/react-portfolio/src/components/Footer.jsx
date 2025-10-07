const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Devang Awasthi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
