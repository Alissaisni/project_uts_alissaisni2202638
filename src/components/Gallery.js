const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery">
        <div className="small-container">
          <h2 className="title-gallery">Gallery</h2>
          <div className="testimonial">
            <div className="small-container">
              <div className="row">
                <div className="col-3">
                  <h3 style={{ color: "white" }}>Gunung Merbabu</h3>
                  <img src="./foto3.jpg" alt="Gunung Merbabu" />
                  <p>
                    Gunung Merbabu merupakan salah satu gunung impian saya.
                    Gunung ini memiliki keindahan yang luar biasa. Merbabu wajib
                    didaki kembali.
                  </p>
                </div>
                <div className="col-3">
                  <h3 style={{ color: "white" }}>Gunung Kerinci</h3>
                  <img src="./foto4.jpeg" alt="Gunung Kerinci" />
                  <p>
                    Gunung Kerinci merupakan gunung terjauh yang pernah saya
                    daki. Gunung ini merupakan gunung tertinggi kedua di
                    Indonesia. Suatu kebanggan bisa mendaki gunung ini di umur
                    17 tahun.
                  </p>
                </div>
                <div className="col-3">
                  <h3 style={{ color: "white" }}>Gunung Salak</h3>
                  <img src="./foto5.jpeg" alt="Gunung Salak" />
                  <p>
                    Gunung Salak merupakan gunung yang terkenal dengan mistis.
                    Gunung ini merupakan gunung trek tersusah yang pernah saya
                    daki. Gunung Salak memang mantap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
