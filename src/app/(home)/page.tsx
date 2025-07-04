import Header from "@/components/organisms/Header";
import { Button } from "@mantine/core";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex justify-center">
        <Image
          src={"/assets/glomiks_banner_1.jpg"}
          width={1080}
          height={680}
          alt="glomiks banner"
          objectFit="contain"
          className="w-full h-[480px]"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex bg-white shadow-xl p-6 max-w-[90%]">
          <div className="flex flex-col gap-3 w-1/2 justify-center">
            <div className="text-3xl font-semibold">About Us</div>
            <div className="flex px-2  bg-[#e21e26] w-[70px] h-[3px]"></div>
          </div>
          <div className="text-sm font-regular w-1/2 text-justify text-[#666666]">
            As Indonesian national company that having strong vision to be
            energy provider and services company, PT. Global Mitra Karya Sejati
            (Glomiks) working operation Integrated in Engineering
            Services,Construction Work, Inspection and Technical Services to a
            wide range of national and regional coverage in Indutrial, oil and
            gas markets and general industrial such as : automotive industry,
            chemical industry, textile industry, fertilizer industry, steel
            industry,etc.
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
              <div className="flex flex-col w-[220px] h-[250px] items-center pt-8 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_automotive.png"}
                  width={60}
                  height={60}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[60px] h-[60px]"
                />
                <div className="text-xl font-semibold">Automotive</div>
              </div>
              <div className="flex flex-col w-[220px] h-[270px] items-center pt-8 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_industry.png"}
                  width={60}
                  height={60}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[60px] h-[60px]"
                />
                <div className="text-xl font-semibold">Industry</div>
              </div>
              <div className="flex flex-col w-[220px] h-[270px] items-center pt-8 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/industri.png"}
                  width={60}
                  height={60}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[60px] h-[60px]"
                />
                <div className="text-xl font-semibold">Insulating</div>
              </div>
              <div className="flex flex-col w-[220px] h-[250px] items-center pt-8 gap-2 shadow-[1px_0px_21px_-2px_rgba(0,0,0,0.75)] bg-white">
                <Image
                  src={"/assets/icon_security.png"}
                  width={60}
                  height={60}
                  alt="glomiks banner"
                  objectFit="contain"
                  className="w-[55px] h-[60px]"
                />
                <div className="text-xl font-semibold">Security System</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <Button variant="outline" radius={"xs"} color="#e21e26">
          Download
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
