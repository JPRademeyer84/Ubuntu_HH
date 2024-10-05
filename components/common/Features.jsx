import Image from "next/image";
import feature_1 from "/public/images/icon/feature/1.png";
import feature_2 from "/public/images/icon/feature/2.png";
import feature_3 from "/public/images/icon/feature/3.png";
import feature_4 from "/public/images/icon/feature/4.png";

const Features = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="row mb-none-30">
              <div className="col-lg-6 mb-30">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_1} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Safe & Transparent Service
                        </h3>
                        <p>
                        Your contributions are handled with care. Our transparent processes ensure every donation and entry directly supports community upliftment and positive change.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_3} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Community Network</h3>
                        <p>
                        Join a vast network of like-minded individuals committed to supporting meaningful causes across South Africa. Together, we make an even greater impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-30 mt-lg-5">
                <div className="row mb-none-30">
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_2} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Security</h3>
                        <p>
                        We prioritize the security of your information and transactions, ensuring your participation is safe and your data remains protected.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6 mb-30">
                    <div className="feature-card hover--effect-1">
                      <div className="feature-card__icon">
                        <Image src={feature_4} alt="image" />
                      </div>
                      <div className="feature-card__content">
                        <h3 className="feature-title">Dedicated Support</h3>
                        <p>
                        Our team is always here for you. Whether it’s answering questions or guiding you through the process, we’re dedicated to providing the best support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1 text-lg-start text-center">
            <div className="section-header">
              <span className="section-sub-title">An Exhaustive list of</span>
              <h2 className="section-title">Our features.</h2>
              <p>
              Discover the powerful features that make Ubuntu Helping Hands Foundation a unique platform for community transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
