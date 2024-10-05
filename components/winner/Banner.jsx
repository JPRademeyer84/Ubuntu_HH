import Image from "next/image";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";

const Banner = () => {
  return (
    <section className="inner-hero-section style--four">
      <div className="bg-shape">
        <Image src={inner_hero_shape_2} alt="inner hero shape 2" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="inner-page-content">
              <h2 className="title">Winners to Be announced</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
