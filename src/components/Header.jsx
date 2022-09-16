import React from "react";
import {
  BiBookBookmark,
  BiGitPullRequest,
  BiGitRepoForked,
} from "react-icons/bi";
import {
  BsBook,
  BsGraphUp,
  BsLink45Deg,
  BsPlayCircle,
  BsThreeDots,
} from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import {
  AiOutlineStar,
  AiFillStar,
  AiFillEye,
  AiOutlineCaretDown,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { VscIssues } from "react-icons/vsc";
import { MdOutlineTableChart } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-github_dark text-github_textWhite px-4 pb-4 lg:px-8">
      <div className="flex items-center h-full justify-between pt-5 ">
        <div className="flex items-center">
          <BiBookBookmark className="text-[#848282] h-4 w-4" />
          <h1 className=" ml-2 text-github_linkBlue md:text-lg cursor-pointer ">
            <span className="hover:underline">facebook</span> /
            <span className="font-semibold hover:underline">react</span>
          </h1>
          <p className="px-2 ml-3 border border-[#474545] inline rounded-full text-github_textHover text-xs">
            Public
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <button className="hidden md:flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1.5 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
            <a className="text-xs" href="">
              <AiFillEye className="h-4 w-4 inline mr-1" />
              Watch <span className="ml-1">6.7k</span>
            </a>
            <AiOutlineCaretDown className="h-3 w-3" />
          </button>
          <button className="hidden md:flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1.5 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
            <a className="text-xs" href="">
              <BiGitRepoForked className="h-4 w-4 inline mr-1" />
              Fork <span className="ml-1">40.3k</span>
            </a>
            <AiOutlineCaretDown className="h-3 w-3" />
          </button>
          <button className="hidden md:flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1.5 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
            <a className="text-xs" href="">
              <AiFillStar fill="#d7d548" className=" h-4 w-4 inline mr-1" />
              Starred <span className="ml-1">197k</span>
            </a>
            <AiOutlineCaretDown className="h-3 w-3" />
          </button>
        </div>
      </div>
      {/* only for small Screen about the repo */}
      <div className="md:hidden">
        <p className="mt-5">
          A declarative, efficient, and flexible JavaScript library for building
          user interfaces.
        </p>
        <div className="flex gap-x-3 items-center mt-5">
          <BsLink45Deg className="h-5 w-5" />
          <a
            href="https://reactjs.org/"
            className=" text-github_linkBlue text-sm font-medium"
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
            <button className="flex justify-center items-center gap-x-2 w-full text-github_text border border-[#434343] rounded-tl-md rounded-bl-md relative bg-github_button hover:border-[#666666] hover:bg-[#292f37] px-3 py-1">
              <AiFillStar className="h-5 w-5 text-[#e3b341]" />
              <p className="text-sm">Starred</p>
            </button>
            <button className="py-2 px-2 hover:border-[#666666] hover:bg-[#292f37]  text-github_text border border-[#434343] rounded-tr-md rounded-br-md relative bg-github_button">
              <AiOutlineCaretDown className="h-3 w-3" />
            </button>
          </div>
          <button className="flex hover:border-[#666666] hover:bg-[#292f37]  justify-center items-center gap-x-2 w-1/2 text-github_text border border-[#434343] rounded-md bg-[#21262d] px-3 py-1">
            <AiFillEye className="" />
            <p className="text-sm">Starred</p>
          </button>
        </div>
      </div>
      <ul className="mt-6 flex justify-between  items-center">
        <div className="flex gap-x-2 items-center">
          <li className="bg-[#292f37] hover:transition duration-150 cursor-pointer px-2 py-2 rounded-md font-semibold text-sm flex items-center gap-x-2">
            <FiCode className="hidden sm:inline  h-5 w-5 text-github_textHover" />{" "}
            Code
          </li>
          <li className="hover:bg-[#292f37] hover:transition duration-150 cursor-pointer px-2 py-2 rounded-md whitespace-nowrap text-sm flex items-center gap-x-2">
            <VscIssues className="hidden sm:inline h-5 w-5 text-github_textHover" />{" "}
            Issues{" "}
            <span className="bg-[#37404c] cursor-pointer hover:transition duration-150 px-1  rounded-md text-xs">
              778
            </span>
          </li>
          <li className="hover:bg-[#292f37] hover:transition duration-150 cursor-pointer px-2 py-2 rounded-md whitespace-nowrap text-sm flex items-center gap-x-2">
            <BiGitPullRequest className="hidden sm:inline h-5 w-5 text-github_textHover" />{" "}
            Pull requests{" "}
            <span className="bg-[#37404c] cursor-pointer hover:transition duration-150 px-1  rounded-md text-xs">
              320
            </span>
          </li>
          <li className="hover:bg-[#292f37] hover:transition hover:duration-200 cursor-pointer px-2 py-2 rounded-md text-sm flex items-center gap-x-2">
            <BsPlayCircle className="hidden sm:inline h-5 w-5 text-github_textHover" />{" "}
            Action
          </li>
          <div className="hidden sm:inline">
            <li className="hover:bg-[#292f37] hover:transition hover:duration-200 cursor-pointer px-2 py-2 rounded-md text-sm flex items-center gap-x-2">
              <MdOutlineTableChart className="hidden sm:inline h-5 w-5 text-github_textHover" />{" "}
              Project
            </li>
          </div>
          <div className="hidden md:inline">
            <li className="hover:bg-[#292f37] hover:transition hover:duration-200 cursor-pointer px-2 py-2 rounded-md text-sm flex items-center gap-x-2">
              <BsBook className="hidden sm:inline h-4 w-4 text-github_textHover" />{" "}
              wiki
            </li>
          </div>
          <div className="hidden lg:inline">
            <li className="hover:bg-[#292f37] hover:transition hover:duration-200 cursor-pointer px-2 py-2 rounded-md text-sm flex items-center gap-x-2">
              <AiOutlineSecurityScan className="hidden sm:inline h-5 w-5 text-github_textHover" />{" "}
              Security
            </li>
          </div>
          <div className="hidden lg:inline">
            <li className="hover:bg-[#292f37] hover:transition hover:duration-200 cursor-pointer px-2 py-2 rounded-md text-sm flex items-center gap-x-2">
              <BsGraphUp className="hidden sm:inline h-4 w-4 text-github_textHover" />{" "}
              Insight
            </li>
          </div>
        </div>
        <BsThreeDots className="hover:bg-[#292f37] lg:hidden hover:transition duration-150 cursor-pointer w-6 h-6 px-1  rounded-md" />
      </ul>
    </div>
  );
};

export default Header;
