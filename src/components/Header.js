const Header = () => {
  return (
    <div className="header">
        <div className="navbar">
          <div className="logo">
            <h1>alissais_</h1>
          </div>
          <nav>
            <ul>
              <li>
                <a href="/" className="btn">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="/about" className="btn">
                  <b>About</b>
                </a>
              </li>
              <li>
                <a href="/gallery" className="btn">
                  <b>Gallery</b>
                </a>
              </li>
              <li>
                <a href="/contact" className="btn">
                  <b>Contact</b>
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default Header;
