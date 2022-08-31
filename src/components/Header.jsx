import React from "react";
import { BiBookBookmark, BiGitRepoForked } from "react-icons/bi";
import { BsLink45Deg, BsThreeDots } from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillEye,
  AiOutlineCaretDown,
} from "react-icons/ai";
// import { CgGitFork } from "react-icons/cg";
const Header = () => {
  return (
    <div className="bg-github_dark text-github_textWhite px-4 pb-12">
      <div className="flex items-center pt-6">
        <BiBookBookmark className="text-[#848282] h-4 w-4" />
        <h1 className=" ml-2 text-github_linkBlue">
          facebook / <span className="font-semibold">react</span>
        </h1>
        <p className="px-1 ml-3 border  rounded-full text-[#848282] text-xs">
          Public
        </p>
      </div>
      <p className="mt-5">
        A declarative, efficient, and flexible JavaScript library for building
        user interfaces.
      </p>
      <div className="flex gap-x-3 items-center mt-5">
        <BsLink45Deg className="h-5 w-5" />
        <a
          href="https://reactjs.org/"
          className=" text-github_linkBlue text-sm"
        >
          reactjs.org
        </a>
      </div>
      <div className="flex items-center hover:text-github_linkBlue cursor-pointer gap-x-3 mt-2 text-github_textHover text-sm group">
        <FaBalanceScale className="group-hover:text-github_linkBlue group-hover:cursor-pointer h-4 w-4 text-github_textHover " />
        <p className="group-hover:text-github_linkBlue group-hover:cursor-pointer">
          MIT license
        </p>
      </div>
      <div className="flex items-center gap-x-4 mt-2 ">
        <div className="flex group text-sm cursor-pointer items-center gap-x-3 text-github_textHover ">
          <AiOutlineStar className="group-hover:text-github_linkBlue group-hover:cursor-pointer text-github_textHover  h-4 w-4" />
          <p className="group-hover:text-github_linkBlue group-hover:cursor-pointer">
            <span className=" font-semibold">194k</span> stars
          </p>
        </div>
        <div className="flex hover:text-github_linkBlue cursor-pointer items-center gap-x-3 text-github_textHover  text-sm">
          <BiGitRepoForked className="h-4 w-4" />
          <p>
            <span className="font-semibold">40.1k</span> forks
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-x-2">
        <div className="flex items-center w-1/2">
          <button className="flex justify-center items-center gap-x-2 w-full text-github_text border border-[#434343] rounded-tl-md rounded-bl-md relative bg-[#21262d] hover:border-[#666666] hover:bg-[#292f37] px-3 py-1">
            <AiFillStar className="h-5 w-5 text-[#e3b341]" />
            <p className="text-sm">Starred</p>
          </button>
          <button className="py-2 px-2 hover:border-[#666666] hover:bg-[#292f37]  text-github_text border border-[#434343] rounded-tr-md rounded-br-md relative bg-[#21262d]">
            <AiOutlineCaretDown className="h-3 w-3  " />
          </button>
        </div>
        <button className="flex hover:border-[#666666] hover:bg-[#292f37]  justify-center items-center gap-x-2 w-1/2 text-github_text border border-[#434343] rounded-md bg-[#21262d] px-3 py-1">
          <AiFillEye className="" />
          <p className="text-sm">Starred</p>
        </button>
      </div>
      <ul className="mt-8 flex justify-between  items-center">
        <div className="flex gap-x-5">
          <li className="hover:bg-[#292f37] px-2 py-1 rounded-md">Code</li>
          <li className="hover:bg-[#292f37]  px-2 py-1 rounded-md">
            Issues{" "}
            <span className="bg-[#37404c] px-1  rounded-md text-xs">776</span>
          </li>
          <li className="hover:bg-[#292f37] px-2 py-1 rounded-md">
            Pull requests <span className="bg-[#fff]">318</span>
          </li>
          <li className="hover:bg-[#292f37] px-2 py-1 rounded-md">Action</li>
        </div>
        <BsThreeDots className="hover:bg-[#292f37] w-6 h-6 px-1 py-0.5 rounded-md" />
      </ul>
    </div>
  );
};

export default Header;
