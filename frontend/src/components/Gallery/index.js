import gallery1 from "../../assets/img/gallery/gallery-1.jpg";
import gallery2 from "../../assets/img/gallery/gallery-2.jpg";
import gallery3 from "../../assets/img/gallery/gallery-3.jpg";
import gallery4 from "../../assets/img/gallery/gallery-4.jpg";
import gallery5 from "../../assets/img/gallery/gallery-5.jpg";
import gallery6 from "../../assets/img/gallery/gallery-6.jpg";
import gallery7 from "../../assets/img/gallery/gallery-7.jpg";
import gallery8 from "../../assets/img/gallery/gallery-8.jpg";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-1.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery1} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-2.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery2} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-3.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery3} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-4.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery4} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-5.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery5} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-6.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery6} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-7.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery7} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/gallery-8.jpg"
                className="galelry-lightbox"
              >
                <img src={gallery8} alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
