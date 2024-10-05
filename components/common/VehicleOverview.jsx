import Image from "next/image";
import specification_1 from "/public/images/icon/specification/1.png";
import specification_2 from "/public/images/icon/specification/2.png";
import specification_3 from "/public/images/icon/specification/3.png";
import specification_4 from "/public/images/icon/specification/4.png";
import specification_5 from "/public/images/icon/specification/5.png";
import specification_6 from "/public/images/icon/specification/6.png";

const VehicleOverview = () => {
  return (
    <>
      <div className="content-block">
        <h3 className="title">Vehicle Overview</h3>
        <p>
                    The Isuzu KB250 2013 model is a reliable and rugged bakkie (pickup truck) that is popular for both work and recreational use. It features a 2.5-liter turbo diesel engine, known for its fuel efficiency and durability. This model delivers about 85 kW of power and 280 Nm of torque, making it ideal for towing and carrying heavy loads.
                    </p>
                    <p>
                    The Isuzu KB250 also boasts a solid off-road capability, with a high ground clearance and a dependable suspension system, ensuring a smooth ride on rough terrain. Its interior is practical, with essential features such as air conditioning and radio/CD, designed for comfort while maintaining its functional purpose. 
                    </p>
                    <p>
                    This model is widely recognized for its longevity, low maintenance costs, and resale value, making it a favorite among businesses and individual users alike.
                    </p>
      </div>
      <div className="content-block">
        <h3 className="title">Specifications</h3>
        <div className="row mb-none-30">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_1} alt="specification_1" />
              </div>
              <div className="icon-item__content">
                <p>Acceleration (0-100 km/h)</p>
                <span>14.2 secs</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_2} alt="specification_2" />
              </div>
              <div className="icon-item__content">
                <p>Top Speed</p>
                <span>160 km/h</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_3} alt="specification_3" />
              </div>
              <div className="icon-item__content">
                <p>Power</p>
                <span>85 kW</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_4} alt="specification_4" />
              </div>
              <div className="icon-item__content">
                <p>Displacement</p>
                <span>2.5 L</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_5} alt="specification_5" />
              </div>
              <div className="icon-item__content">
                <p>Torque</p>
                <span>280 Nm</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_6} alt="specification_6" />
              </div>
              <div className="icon-item__content">
                <p>Year</p>
                <span>2013</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VehicleOverview;
