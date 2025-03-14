import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { IconButton } from "@material-tailwind/react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        size="lg"
        variant="text"
        color="blue-gray" // Changed from "secondary" to "blue-gray"
        onClick={() => swiper.slidePrev()}
        className="!absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-transparent rounded-full"
      >
        <AiOutlineLeft className="h-7 w-7" />
      </IconButton>
      <IconButton
        size="lg"
        variant="text"
        color="blue-gray" // Changed from "secondary" to "blue-gray"
        onClick={() => swiper.slideNext()}
        className="!absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-transparent rounded-full"
      >
        <AiOutlineRight className="h-7 w-7" />
      </IconButton>
    </>
  );
}

export default function HomeCarousel() {
  return (
    <div className="w-full">
      <Swiper
        loop={true}
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="relative rounded-lg"
      >
        {[
          "https://www.petexpress.com.ph/cdn/shop/files/PCPet-1_1800x.png?v=1735810298",
          "https://www.petexpress.com.ph/cdn/shop/files/PCPet-2_1800x.png?v=1735810298",
          "https://www.petexpress.com.ph/cdn/shop/files/PC-Pet3_1800x.png?v=1735810299",
          "https://www.petexpress.com.ph/cdn/shop/files/PC-Pet4_1800x.png?v=1737452458",
          "https://www.petexpress.com.ph/cdn/shop/files/Pet-insurance_1800x.png?v=1683253528",
        ].map((img, index) => (
          <SwiperSlide key={index} className="select-none">
            <img
              src={img}
              alt={`image-${index}`}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </div>
  );
}
