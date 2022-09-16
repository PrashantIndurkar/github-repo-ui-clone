import React from "react";
import {
  AiOutlineCaretDown,
  AiOutlineClockCircle,
  AiFillEye,
} from "react-icons/ai";
import { BsBook, BsLink45Deg, BsThreeDots } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { FcCheckmark } from "react-icons/fc";
import { TbHeartHandshake } from "react-icons/tb";
import File from "./File";
import { BsStar } from "react-icons/bs";
import { BiGitRepoForked, BiMenu } from "react-icons/bi";
import profile from "../assets/11849.jpeg";
import { FaBalanceScale } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";
import { FiCode } from "react-icons/fi";

// used by img
import {
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
} from "../assets/used/index.js";
import {
  userC1,
  userC2,
  userC3,
  userC4,
  userC5,
  userC6,
  userC7,
  userC8,
  userC9,
  userC10,
  userC11,
} from "../assets/contributers/index";

const RepoSection = () => {
  return (
    <div className="px-4 lg:px-36 pt-6 bg-github_dark h-fit pb-4 overflow-hidden">
      {/* main repo div with file and about */}
      <div className="flex w-full">
        {/* files Repo div */}
        <div className="w-full md:w-4/6">
          {/* Buttons to download codes */}
          <div className="flex justify-between">
            <button className="flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
              <CgGitFork className="h-5 w-5" />
              <a className="text-sm" href="">
                main
              </a>
              <AiOutlineCaretDown className="h-3 w-3" />
            </button>
            <div className="flex gap-x-2">
              <button className="hidden sm:flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
                <a className="text-sm" href="">
                  Go to file
                </a>
              </button>
              <button className="hidden sm:flex items-center bg-github_button text-github_text gap-x-2 px-3 py-1 rounded-md border border-github_border hover:bg-github_hoveBackground hover:border-github_textHover">
                <a className="text-sm" href="">
                  Add file
                </a>
                <AiOutlineCaretDown className="h-3 w-3" />
              </button>
              <button className="hidden sm:flex items-center bg-github_green text-github_textWhite gap-x-2 px-3 py-1 rounded-md border border-github_border hover:bg-[#377e45] hover:border-[#238636]">
                <FiCode />
                <a className="text-sm" href="">
                  Code
                </a>
                <AiOutlineCaretDown className="h-3 w-3" />
              </button>
            </div>
            <button className="flex items-center bg-github_button text-github_text px-3 py-1 rounded-md border border-github_border sm:hidden">
              <BsThreeDots />
            </button>
          </div>
          <div className="mt-5 border-2 border-github_border p-3 rounded-md">
            <div className="flex  text-github_textWhite items-center justify-between border-b  border-b-github_border pb-3 ">
              <div className="flex items-center gap-x-3 w-32">
                <img src={profile} alt="" className="rounded-full h-6 w-6" />
                <a
                  className="font-semibold text-sm hover:underline"
                  href="https://github.com/facebook/react/commits?author=kassens"
                >
                  kassens
                </a>
                <BsThreeDots className="sm:hidden bg-[#393f48] px-1 h-6 w-6 rounded-md cursor-pointer" />
              </div>
              <div className="flex items-center gap-x-2 truncate  w-1/2 mr-4">
                <p className=" hidden sm:inline text-xs  hover:underline hover:text-github_linkBlue truncate ...">
                  {" "}
                  Handle rejections to avoid uncaught rejections (#25272)
                </p>
              </div>
              <div className="flex items-center gap-x-2 text-github_textHover">
                <FcCheckmark />
                <a
                  className="text-xs hover:text-github_linkBlue whitespace-nowrap"
                  href="#"
                >
                  3 days ago
                </a>
                <div className="md:flex items-center  gap-x-1 whitespace-nowrap">
                  <AiOutlineClockCircle className="hover:text-github_linkBlue cursor-pointer" />
                  <p className="hidden md:inline font-semibold text-xs">
                    {" "}
                    15,205{" "}
                    <span className="hidden lg:inline font-normal text-xs">
                      Commit
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Files */}
            <div className="first:mt-10">
              <File
                folderName=".circleci"
                number="3"
                icon
                description="
CI: try to make caching more reliable (#25259)"
              />
              <File
                folderName=".codesandbox"
                number="12"
                icon
                description="
Update Node.js to latest v14.17.6 LTS (#22401)"
              />
              <File
                folderName=".github"
                number="5"
                icon
                description="Remove React 18 issue template (#24220)"
              />
              <File
                folderName="fixtures"
                number="13"
                icon
                description="
[Flight] Fix Webpack Chunk Loading (#25271)"
              />
              <File
                folderName="packages"
                number="4"
                icon
                description="
Handle rejections to avoid uncaught rejections (#25272)"
              />
              <File
                folderName="scripts"
                number="4"
                icon
                description="
[Flight] Implement FlightClient in terms of Thenable/Promises instead…"
              />
              <File
                folderName=".editorconfig"
                number="3"
                description="
https link to editorconfig.org (#18421)"
              />
              <File
                folderName="eslintrc.js"
                number="1"
                description="
Renamed packages/react-devtools-scheduling-profiler to packages/react…"
              />
              <File
                folderName="gitignore"
                number="11"
                description="
Renamed packages/react-devtools-scheduling-profiler to packages/react"
              />
              <File
                folderName="CODE_OF_CONDUCT"
                number="12"
                description="
revert last grammatical edit (#25067)"
              />
              <File
                folderName="CONTRIBUTING.md"
                number="12"
                description="[Gatsby] https://facebook.github.io/react/ https://reactjs.org/"
              />
              <File
                folderName="LICENSE"
                number="1"
                description="Drop the year from Facebook copyright headers and the LICENSE"
              />
              <File
                folderName="README.md"
                number="1"
                description="
            Added the word 'own' to the README file for design consistency (#25185)
            "
              />
              <File
                folderName="packages.json"
                number="1"
                description="Flow:upgrade t0.142(#25255)"
              />

              <File
                folderName="netlify.toml"
                number="1"
                description="add netlify toml file (#12350)"
              />
              <File
                folderName="yarn.lock"
                number="1"
                description="Flow:upgrade t0.142(#25255)"
              />
            </div>
          </div>
          <div className="mt-5 ">
            <div className="flex items-center border-2 border-github_border rounded-md p-2">
              <BiMenu className="text-github_textHover inline mr-4 h-5 w-5" />
              <a
                href="https://github.com/facebook/react#readme"
                className=" cursor-pointer hover:underline  hover:text-github_linkBlue font-semibold text-github_textHover"
              >
                README.md
              </a>
            </div>
            <div className="border-2 border-github_border rounded-md p-2">
              <div className="flex items-center border-b  mt-2 pb-4 border-github_border">
                <h1 className="text-github_linkBlue text-2xl font-bold ml-5 hover:underline cursor-pointer">
                  React
                </h1>
              </div>
              <div>
                <h2 className="text-github_textHover ml-5 mt-3">
                  React is a JavaScript library for building user interfaces.
                </h2>
              </div>
            </div>
          </div>
          <div className="md:hidden text-github_textWhite">
            {/* Releases */}
            <div className="mt-4 border-b-2 border-b-github_button pb-8">
              <h1 className="font-semibold">
                Releases{" "}
                <span className="bg-github_button px-2 rounded-full text-xs text-github_textHover ml-2 font-normal">
                  99
                </span>
              </h1>

              <div className="mt-5 flex items-center gap-x-2">
                <GoTag fill="#238636" className="h-5 w-5" />
                <div className="cursor-pointer group">
                  <p className="font-semibold text-sm group-hover:text-github_linkBlue">
                    18.2.0 (June 14, 2022){" "}
                    <p className="text-xs group-hover:text-github_linkBlue text-github_textHover font-normal">
                      on 15 Jun
                    </p>
                  </p>
                </div>
                <p className=" border border-github_green px-1 py-0.5 rounded-full text-xs text-github_green">
                  Latest
                </p>
              </div>
              <p className="cursor-pointer text-github_linkBlue text-sm mt-5 hover:underline">
                + 98 releases
              </p>
            </div>
            {/* Packages */}
            <div className="mt-4 border-b-2 border-b-github_button pb-8">
              <h1 className="text-github_textWhite font-semibold">Packages</h1>
              <p className="mt-2 text-xs text-github_textHover">
                No packages published
              </p>
            </div>
            {/* used BY */}
            <div className="mt-4 border-b-2 border-b-github_button pb-8">
              <h1 className="font-semibold">
                Used by{" "}
                <span className="bg-github_button text-github_textHover rounded-full px-2 py-0.5 text-xs ml-2 font-normal">
                  11.5m
                </span>
              </h1>
              <div className="flex items-center mt-4 group">
                <img
                  src={user1}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 cursor-pointer"
                />
                <img
                  src={user2}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user3}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user4}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user5}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user6}
                  alt=""
                  className="w-9 h-9 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user7}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <img
                  src={user8}
                  alt=""
                  className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
                />
                <p className="hover:underline group-hover:underline text-github_linkBlue font-semibold text-xs ml-2 cursor-pointer">
                  + 11,234,562
                </p>
              </div>
            </div>
            {/* contributors */}
            <div className="mt-4 border-b-2 w-full border-b-github_button  pb-8">
              <h1 className="font-semibold">
                Contributors{" "}
                <span className="bg-github_button text-github_textHover rounded-full px-2 py-0.5 text-xs ml-2 font-normal">
                  1,577
                </span>
              </h1>
              <div className="flex xl:w-4/5  gap-x-2 mt-5">
                <img
                  src={userC1}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC2}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC3}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC4}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC5}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC6}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC7}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC8}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC9}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC10}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
                <img
                  src={userC11}
                  alt=""
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </div>
              <p className="text-github_linkBlue hover:underline text-xs mt-5 font-semibold cursor-pointer  inline-block">
                + 1,566 contributors
              </p>
            </div>
            {/* Environment */}
            <div className=" mt-4 border-b-2 border-b-github_button  pb-8">
              <h1>Environment</h1>
              <div className="flex items-center gap-x-2 mt-4">
                <IoRocketOutline className="inline" />
                <p className="hover:underline hover:text-github_linkBlue cursor-pointer">
                  github-page
                </p>
                <p className="text-github_green px-2 text-xs border border-r-github_green rounded-full">
                  Active
                </p>
              </div>
            </div>
            {/* Language */}
            <div className=" mt-4 border-b-2 border-b-github_button  pb-8">
              <h1>Language</h1>
              {/* Progress bar */}
              <div className="w-full bg-[#bbbbbb] h-2 rounded-full mt-4">
                <div className="w-5/6 bg-[#916a4b] h-2  rounded-l-full">
                  <div className="w-5/6 bg-[#4e6ec7] h-2  rounded-l-full">
                    <div className="w-5/6 bg-[#e7771b] h-2   rounded-l-full">
                      <div className="w-5/6 bg-[#f1e05a] h-2 rounded-l-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 mt-5 gap-x-2">
                <a
                  href="#"
                  className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover "
                >
                  <div className="h-2 w-2 rounded-full bg-[#f1e05a]"></div>
                  Javascript <span>95%</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
                >
                  <div className="h-2 w-2 rounded-full bg-[#e7771b]"></div>
                  Html <span>34%</span>
                </a>{" "}
                <a
                  href="#"
                  className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
                >
                  <div className="h-2 w-2 rounded-full bg-[#673298]"></div>
                  Css <span>15%</span>
                </a>{" "}
                <a
                  href="#"
                  className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
                >
                  <div className="h-2 w-2 rounded-full bg-[#537ad5]"></div>
                  TypeScript <span>45%</span>
                </a>{" "}
                <a
                  href="#"
                  className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
                >
                  <div className="h-2 w-2 rounded-full bg-[#bbbbbb]"></div>
                  Other <span>5%</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* md: about side bar */}
        <div className="text-github_textWhite w-4/12 ml-8 hidden md:inline">
          <h1 className="font-semibold">About</h1>
          <p className="mt-5 text-[#b6bebe] leading-6">
            A declarative, efficient, and flexible JavaScript library for
            building user interfaces.
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
          <div className="mt-4">
            <button className="button">react</button>
            <button className="button">javascript</button>
            <button className="button">library</button>
            <button className="button">ui</button>
            <button className="button">frontend</button>
            <button className="button">declarative</button>
          </div>
          <div className="mt-4 text-github_textHover text-sm border-b-2 pb-8  border-github_button">
            <ol className="space-y-3">
              <li className="cursor-pointer hover:text-github_linkBlue">
                <BsBook className="inline mr-2 " /> Readme
              </li>
              <li className="cursor-pointer hover:text-github_linkBlue">
                <FaBalanceScale className="inline mr-2" />
                MIT license
              </li>
              <li className="cursor-pointer hover:text-github_linkBlue">
                <TbHeartHandshake className="inline mr-2" /> Code of conduct
              </li>
              <li className="cursor-pointer hover:text-github_linkBlue">
                <BsStar className="inline mr-2" />
                <span className="font-semibold">194k</span> star
              </li>
              <li className="cursor-pointer hover:text-github_linkBlue">
                <AiFillEye className="inline mr-2" />{" "}
                <span className="font-semibold">6.7k</span> watching
              </li>
              <li className="cursor-pointer hover:text-github_linkBlue">
                <BiGitRepoForked className="inline mr-2" />
                <span className="font-semibold">40.2k</span> forked
              </li>
            </ol>
          </div>

          {/* Releases */}
          <div className="mt-4 border-b-2 border-b-github_button pb-8">
            <h1 className="font-semibold">
              Releases{" "}
              <span className="bg-github_button px-2 rounded-full text-xs text-github_textHover ml-2 font-normal">
                99
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-x-2">
              <GoTag fill="#238636" className="h-5 w-5" />
              <div className="cursor-pointer group">
                <p className="font-semibold text-sm group-hover:text-github_linkBlue">
                  18.2.0 (June 14, 2022){" "}
                  <p className="text-xs group-hover:text-github_linkBlue text-github_textHover font-normal">
                    on 15 Jun
                  </p>
                </p>
              </div>
              <p className=" border border-github_green px-1 py-0.5 rounded-full text-xs text-github_green">
                Latest
              </p>
            </div>
            <p className="cursor-pointer text-github_linkBlue text-sm mt-5 hover:underline">
              + 98 releases
            </p>
          </div>
          {/* Packages */}
          <div className="mt-4 border-b-2 border-b-github_button pb-8">
            <h1 className="text-github_textWhite font-semibold">Packages</h1>
            <p className="mt-2 text-xs text-github_textHover">
              No packages published
            </p>
          </div>
          {/* used BY */}
          <div className="mt-4 border-b-2 border-b-github_button pb-8">
            <h1 className="font-semibold">
              Used by{" "}
              <span className="bg-github_button text-github_textHover rounded-full px-2 py-0.5 text-xs ml-2 font-normal">
                11.5m
              </span>
            </h1>
            <div className="flex items-center mt-4 group">
              <img
                src={user1}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 cursor-pointer"
              />
              <img
                src={user2}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user3}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user4}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user5}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user6}
                alt=""
                className="w-9 h-9 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user7}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <img
                src={user8}
                alt=""
                className="w-8 h-8 rounded-full border-github_border border-2 -ml-1.5 cursor-pointer"
              />
              <p className="hover:underline group-hover:underline text-github_linkBlue font-semibold text-xs ml-2 cursor-pointer">
                + 11,234,562
              </p>
            </div>
          </div>
          {/* contributors */}
          <div className="mt-4 border-b-2 w-full border-b-github_button  pb-8">
            <h1 className="font-semibold">
              Contributors{" "}
              <span className="bg-github_button text-github_textHover rounded-full px-2 py-0.5 text-xs ml-2 font-normal">
                1,577
              </span>
            </h1>
            <div className="grid grid-cols-7 xl:w-4/5  gap-y-2 mt-5">
              <img
                src={userC1}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC2}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC3}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC4}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC5}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC6}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC7}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC8}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC9}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC10}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
              <img
                src={userC11}
                alt=""
                className="h-8 w-8 rounded-full cursor-pointer"
              />
            </div>
            <p className="text-github_linkBlue hover:underline text-xs mt-5 font-semibold cursor-pointer  inline-block">
              + 1,566 contributors
            </p>
          </div>
          {/* Environment */}
          <div className=" mt-4 border-b-2 border-b-github_button  pb-8">
            <h1>Environment</h1>
            <div className="flex items-center gap-x-2 mt-4">
              <IoRocketOutline className="inline" />
              <p className="hover:underline hover:text-github_linkBlue cursor-pointer">
                github-page
              </p>
              <p className="text-github_green px-2 text-xs border border-r-github_green rounded-full">
                Active
              </p>
            </div>
          </div>
          {/* Language */}
          <div className=" mt-4 border-b-2 border-b-github_button  pb-8">
            <h1>Language</h1>
            {/* Progress bar */}
            <div className="w-5/6 bg-[#bbbbbb] h-2 rounded-full mt-4">
              <div className="w-5/6 bg-[#916a4b] h-2  rounded-l-full">
                <div className="w-5/6 bg-[#4e6ec7] h-2  rounded-l-full">
                  <div className="w-5/6 bg-[#e7771b] h-2   rounded-l-full">
                    <div className="w-5/6 bg-[#f1e05a] h-2 rounded-l-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 mt-5 gap-x-2">
              <a
                href="#"
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover "
              >
                <div className="h-2 w-2 rounded-full bg-[#f1e05a]"></div>
                Javascript <span>95%</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
              >
                <div className="h-2 w-2 rounded-full bg-[#e7771b]"></div>
                Html <span>34%</span>
              </a>{" "}
              <a
                href="#"
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
              >
                <div className="h-2 w-2 rounded-full bg-[#673298]"></div>
                Css <span>15%</span>
              </a>{" "}
              <a
                href="#"
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
              >
                <div className="h-2 w-2 rounded-full bg-[#537ad5]"></div>
                TypeScript <span>45%</span>
              </a>{" "}
              <a
                href="#"
                className="flex items-center gap-x-2 cursor-pointer hover:underline hover:text-github_linkBlue transition duration-200 text-sm font-medium text-github_textHover"
              >
                <div className="h-2 w-2 rounded-full bg-[#bbbbbb]"></div>
                Other <span>5%</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoSection;
