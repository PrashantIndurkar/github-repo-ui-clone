import githubLogo from "../assets/github.png";
import { HiOutlineBell } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-[#161b22] h-14 px-7">
      <div className="flex items-center h-full justify-between">
        <div className="flex gap-x-4">
          <img src={githubLogo} className="h-8 w-8" alt="" />
          <div className="group items-center relative flex">
            <input
              type="text"
              placeholder="Search or jump to..."
              className=" bg-github_navDark text-sm outline-none text-white focus:bg-github_hoveBackground text-github_text px-3 py-1 rounded-md border border-github_border"
            />
            <div className="group-focus-within:hidden absolute right-0 mr-2  border rounded-md border-github_border">
              <span className="px-2 py-0.5 text-xs text-github_text">/</span>
            </div>
          </div>
          <ul className="flex items-center text-github_textWhite gap-x-4 font-semibold  text-sm">
            <li className="hover:text-github_textHover">
              <a href="#">Pull requests</a>
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
        <div>
          <HiOutlineBell className="h-5 w-5" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
