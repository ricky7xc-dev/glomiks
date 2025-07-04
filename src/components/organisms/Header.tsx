"use client";

import { Text } from "@mantine/core";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex w-full px-[20px] lg:px-[120px] py-2 bg-[#e21e26] items-end justify-end gap-2">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-white" fill="white" size={16} />
          <Text size="md" c="#ffffff">
            +6221 5604683
          </Text>
        </div>
        <Text size="md" c="#ffffff">
          |
        </Text>
        <div className="flex items-center gap-2">
          <IoIosMail className="text-white" fill="white" size={16} />
          <Text size="md" c="#ffffff">
            info@glomiks.co.id
          </Text>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white shadow-md px-[20px] lg:px-[120px] pt-2 z-50">
        <Image
          src={"/assets/glomiks-logo.png"}
          width={100}
          height={100}
          alt="glomiks banner"
          objectFit="contain"
          className="w-[180px] h-[33px]"
        />
        <div className="flex gap-2">
          <div className="border-b-4 border-[#e21e26] text-[#e21e26] pb-2 w-[80px] text-center text-lg font-semibold">
            Home
          </div>
          <div className=" pb-2 w-[80px] text-center text-lg font-semibold">
            About
          </div>
          <div className=" pb-2 w-[80px] text-center text-lg font-semibold">
            Product
          </div>
          <div className=" pb-2 w-[80px] text-center text-lg font-semibold">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
