import React from "react";
import ServiceCompo from "./ServiceCompo";

const Service = () => {
  return (
    <>
      <div className="w-full p-10 ">
        <div>
          <div className="font-bold text-[32px] flex justify-center">
            Our Services
          </div>
          <div className="grid grid-cols-1 text-black sm:grid-cols-2 lg:grid-cols-3 ">
            <ServiceCompo
              imageName="service1.svg"
              name="1on1 Coaching"
              disp="Our fest offers world class venues equipped with the
                    latest technology and amenities to host a variety of
                        events and activities"
            />
            <ServiceCompo
              imageName="service1.svg"
              name="Top-Notch Venues and
                    Facilities"
              disp="Our fest offers world class venues equipped with the
                    latest technology and amenities to host a variety of
                        events and activities"
            />

            <ServiceCompo
              imageName="service1.svg"
              name="Top-Notch Venues and
                    Facilities"
              disp="Our fest offers world class venues equipped with the
                    latest technology and amenities to host a variety of
                        events and activities"
            />
            {/* <div className="flex justify-center "> */}
              <ServiceCompo
                imageName="service1.svg"
                name="Top-Notch Venues and
                    Facilities"
                disp="Our fest offers world class venues equipped with the
                    latest technology and amenities to host a variety of
                        events and activities"
              />

              <ServiceCompo
                imageName="service1.svg"
                name="Top-Notch Venues and
                    Facilities"
                disp="Our fest offers world class venues equipped with the
                    latest technology and amenities to host a variety of
                        events and activities"
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
