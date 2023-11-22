import React, { useState, useEffect } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="about">
      <div className={`about ${animate ? "animate" : ""}`}>
        <div className="small-container">
          <h2 className="title-about">About</h2>
          <div className="row">
            <div className="col-2">
              <img src="./foto2.jpg" className="offer-img" alt="Offer" />
            </div>
            <div className="col-2">
              <h1 style={{ color: "white" }}>Tak Kenal Maka Kenalan</h1>
              <h2
                style={{
                  textAlign: "justify",
                  fontSize: "15px",
                  color: "white",
                }}
              >
                <br />
                Perkenalkan nama saya Alissa Isni Silviani Sutadi, saya berasal
                dari Sumedang. Di Universitas Pendidikan Indonesia ini saya
                mengambil jurusan Pendidikan Ilmu Komputer. Saya memiliki hobi
                mendaki gunung. Sebagian foto terbaik di gunung akan saya share
                dibawah ini.
              </h2>
              <a href="/gallery" className="btn">
                Klik Disini!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
