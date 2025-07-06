"use client";

import Header from "@/components/organisms/Header";
import { Button } from "@mantine/core";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex justify-center">
        <Swiper
          pagination={true}
          loop
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              src={"/assets/glomiks_banner_1.jpg"}
              width={1080}
              height={680}
              alt="glomiks banner"
              objectFit="contain"
              className="w-full h-[580px] mask-l-to-90%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={"/assets/glomiks_banner_1.jpg"}
              width={1080}
              height={680}
              alt="glomiks banner"
              objectFit="contain"
              className="w-full h-[580px] mask-l-to-90%"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute flex justify-center top-[10rem] z-50 w-[55%]">
        <div className="flex flex-col bg-white shadow-xl p-8 w-full">
          {/* Bagian Heading "Glomiks" dan Underline */}
          <div className="flex flex-col gap-4 justify-center mb-6">
            <div className="text-2xl font-bold text-[#808080] tracking-tight">
              Glomiks
            </div>
            {/* Underline Merah yang Lebih Tebal dan Membulat */}
            {/* <div className="flex px-3 bg-[#e21e26] w-[90px] h-[4px] rounded-full"></div> */}
          </div>
          <div className="text-4xl font-extrabold text-[#181A48] leading-wide tracking-wide uppercase">
            Engineering, Construction,
            <br /> and Technical Excellence
            <br />
            Supporting
            <span className="text-[#e21e26] ml-2">
              <TypeAnimation
                sequence={[
                  "Oil",
                  1500,
                  "Gas",
                  1500,
                  "Automotive",
                  1500,
                  "Chemical",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            and
            <br />
            more industries, nationwide.
          </div>
          <div className="text-sm font-regular text-justify text-[#666666] mt-8">
            As Indonesian national company that having strong vision to be
            energy provider and services company, PT. Global Mitra Karya Sejati
            (Glomiks) working operation Integrated in Engineering
            Services,Construction Work, Inspection and Technical Services to a
            wide range of national and regional coverage in Indutrial, oil and
            gas markets and general industrial such as : automotive industry,
            chemical industry, textile industry, fertilizer industry, steel
            industry,etc.
          </div>
          <div className="max-w-max">
            <Button variant="filled" className="mt-6" size="lg" color="#e21e26">
              Contact US <FaPhoneAlt className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex max-w-[90%]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-1/2 justify-center">
              <div className="text-3xl font-semibold">Our Vision</div>
              <div className="flex px-2  bg-[#e21e26] w-[70px] h-[3px]"></div>
            </div>
            <div className="text-sm font-regular text-justify text-[#666666]">
              Becoming a fully integrated Energy Provider and Services Company
              which have business line in energy, we implement the technology
              and science to enhance all natural resources and sharing in
              contribution for energy demand which cheap and peaceful for human
              being and environment.
            </div>
          </div>
          <Image
            src={"/assets/vision.png"}
            width={1080}
            height={680}
            alt="glomiks banner"
            objectFit="contain"
            className="w-[500px] h-[300px]"
          />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex max-w-[90%]">
          <Image
            src={"/assets/mission.png"}
            width={1080}
            height={680}
            alt="glomiks banner"
            objectFit="contain"
            className="w-[500px] h-[300px]"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-1/2 justify-center">
              <div className="text-3xl font-semibold">Our Mission</div>
              <div className="flex px-2  bg-[#e21e26] w-[70px] h-[3px]"></div>
            </div>
            <div className="text-sm font-regular text-justify text-[#666666]">
              Becoming a fully integrated Energy Provider and Services Company
              which have business line in energy, we implement the technology
              and science to enhance all natural resources and sharing in
              contribution for energy demand which cheap and peaceful for human
              being and environment.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="flex w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-3 justify-center mb-[150px] px-[5rem]">
              <div className="text-3xl font-semibold">What We Offer</div>
              <div className="flex px-2  bg-[#e21e26] w-[70px] h-[3px]"></div>
            </div>
            <div className="flex items-end justify-center bg-red-500 w-full h-[190px]">
              <div className="flex flex-col w-[220px] h-[280px] items-center pt-3 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_automotive.png"}
                  width={50}
                  height={50}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[50px] h-[50px]"
                />
                <div className="text-xl font-semibold">Automotive</div>
                <div className="flex w-full h-full my-1">
                  <Swiper
                    pagination={true}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Glass-Fiber-Mesh.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 1
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Glass-Cloth.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 2
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="flex flex-col w-[220px] h-[300px] items-center pt-3 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_industry.png"}
                  width={50}
                  height={50}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[50px] h-[50px]"
                />
                <div className="text-xl font-semibold">Industry</div>
                <div className="flex w-full h-full my-1">
                  <Swiper
                    pagination={true}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Ceramic-Fiber-Board.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 1
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Ceramic-Fiber-Blanket.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 2
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="flex flex-col w-[220px] h-[300px] items-center pt-3 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/industri.png"}
                  width={50}
                  height={50}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[50px] h-[50px]"
                />
                <div className="text-xl font-semibold">Insulating</div>
                <div className="flex w-full h-full my-1">
                  <Swiper
                    pagination={true}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Gaskets.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 1
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Gland-Packing.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 2
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              <div className="flex flex-col w-[220px] h-[280px] items-center pt-3 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_security.png"}
                  width={50}
                  height={50}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[45px] h-[50px]"
                />
                <div className="text-xl font-semibold">Security System</div>
                <div className="flex w-full h-full my-1">
                  <Swiper
                    pagination={true}
                    loop
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    className="mySwiper"
                  >
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Spindle-Pin.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 1
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex w-full">
                      <div className="w-full flex flex-col items-center text-center justify-center">
                        <Image
                          src={"/assets/Strapping-Band.webp"}
                          width={120}
                          height={120}
                          alt="glomiks banner"
                          objectFit="contain"
                          className="w-[120px] h-[120px] px-auto"
                        />
                        Barang 2
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="outline" radius={"xs"} color="#e21e26">
          See All Products
        </Button>
      </div>
      <div className="flex flex-col gap-4 px-[5rem] mt-12">
        <Image
          src={"/assets/logo_glomiks_footer.png"}
          width={128}
          height={128}
          alt="glomiks banner"
          objectFit="contain"
          className="w-[128px] h-[128px]"
        />
        <div className="text-xl font-semibold">
          PT. GLOBAL MITRA KARYA SEJATI
        </div>
        <div className="text-sm font-regular text-[#666666]">
          Jl. Anggrek Neli Murni Raya Blok A No.110
        </div>
        <div className="text-sm font-regular text-[#666666]">
          Jl. Anggrek Neli Murni Raya Blok A No.110
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-[#e21e26]" fill="#e21e26" size={16} /> :
          <div className="text-sm font-regular text-[#666666]">
            +6221 5604683
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoIosMail className="text-[#e21e26]" fill="#e21e26" size={16} /> :
          <div className="text-sm font-regular text-[#666666]">
            Jl. Anggrek Neli Murni Raya Blok A No.110 info@glomiks.co.id
          </div>
        </div>
      </div>
      <div className="flex bg-[#e21e26] w-full h-[80px] items-center mt-12">
        <div className="flex gap-4 w-full px-[5rem] justify-between">
          <div className="text-md font-semibold text-white">
            © PT. GLOBAL MITRA KARYA SEJATI. All Rights Reserved
          </div>
          <div className="flex gap-2">
            <div className="text-white w-[80px] text-center text-lg font-semibold">
              Home
            </div>
            <div className="text-white w-[80px] text-center text-lg font-semibold">
              About
            </div>
            <div className="text-white w-[80px] text-center text-lg font-semibold">
              Product
            </div>
            <div className="text-white w-[80px] text-center text-lg font-semibold">
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
