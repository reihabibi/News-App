import React from "react";

import { BiHomeAlt, BiNotification, BiUser, BiSearch } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="hidden lg:block sticky lg:fixed w-32 h-full py-14 left-0 border-r border-gray-300">
      <div className="flex flex-col items-center justify-center gap-y-6">
        <BiHomeAlt className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
        <BiSearch className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
        <BiNotification className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
        <BsBookmarkDash className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
        <BiUser className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
        <AiOutlineSetting className="w-14 h-10 py-1 px-4 rounded-lg text-gray-800 hover:bg-gray-800 hover:text-gray-200 transition duration-150 ease-in-out " />
      </div>
    </div>
  );
}

export default Sidebar;
