import githubLogo from "../assets/github.png";
import { HiOutlineBell } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { AiOutlineCaretDown } from "react-icons/ai";
import profile from "../assets/prashant.jpg";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-[#161b22] h-14 px-4 md:px-5">
      <div className="flex items-center h-full justify-between">
        <div className="md:hidden text-github_textWhite w-3 ">
          <FiMenu className="h-6 w-6" />
        </div>
        <div className="flex gap-x-4 items-center">
          <img src={githubLogo} className="h-8 w-8" alt="" />
          <div className="hidden group items-center relative md:flex">
            <input
              type="text"
              placeholder="Search or jump to..."
              className=" bg-github_navDark text-sm outline-none text-white focus:bg-github_hoveBackground text-github_text px-3 py-1 rounded-md border border-github_border md:w-56 lg:w-72"
            />
            <div className="group-focus-within:hidden absolute right-0 mr-2  border rounded-md border-github_border">
              <span className="px-2 py-0.5 text-xs text-github_text">/</span>
            </div>
          </div>
          <ul className="hidden md:flex items-center text-github_textWhite gap-x-4 font-semibold  text-sm">
            <li className="hover:text-github_textHover">
              <a href="#">
                Pull <span className="md:hidden">requests</span>
              </a>
            </li>

            <li className="hover:text-github_textHover">
              <a href="#">Issues</a>
            </li>
            <li className="hover:text-github_textHover">
              <a href="#">Marketplace</a>
            </li>
            <li className="hover:text-github_textHover">
              <a href="#">Explore</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-github_textWhite gap-x-4">
          <div className="relative flex items-center">
            <HiOutlineBell className="h-5 w-5 " />
            <div className="after:absolute after:content-[''] after:bg-github_linkBlue after:h-2.5 after:w-2.5 after:rounded-full after:top-0 after:right-0 "></div>
          </div>
          <div className="hidden md:flex h-full md:items-center cursor-pointer">
            <BiPlus className="h-5 w-5" />
            <AiOutlineCaretDown className="h-3 w-3" />
          </div>
          <div className="hidden md:flex items-center cursor-pointer gap-x-1">
            <img src={profile} className="h-5 w-5 rounded-full" />
            <AiOutlineCaretDown className="h-3 w-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
