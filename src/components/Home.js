import { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main>
      <div
        className={`home ${isHovered ? "hovered" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="containers">
          <div className="row">
            <div className="col-1">
              <img src="./IMG_5716 1.png" width="300px" alt="Profile" />
            </div>
            <div className="col-1">
              <h1 className={`reveal-text ${isHovered ? "visible" : ""}`}>
                Hallo Warga Kemakom!!
                <br />
                Selamat Datang
              </h1>
              <a href="/about" className="btn">
                <b>Yuk Kenalan!</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
