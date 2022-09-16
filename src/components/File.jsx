import React from "react";
import { FaFolder } from "react-icons/fa";
import { BsFileEarmark } from "react-icons/bs";

const File = ({ folderName, number, icon, description }) => {
  return (
    <div className="text-github_textHover flex items-center justify-between border-b  border-github_border h-10">
      <div className="flex items-center  gap-x-4">
        {icon ? (
          <FaFolder className="text-github_textHover " />
        ) : (
          <BsFileEarmark className="text-github_textHover" />
        )}

        <h1 className="cursor-pointer hover:underline w-48 mr-2 hover:text-github_linkBlue truncate ...">
          {folderName}
        </h1>
      </div>
      <p className="hidden md:inline text-xs  truncate ... w-2/5 hover:underline hover:text-github_linkBlue cursor-pointer float-left mr-8">
        {description}
      </p>
      <p className="text-sm w-32 whitespace-nowrap truncate ...">
        {number} months ago
      </p>
    </div>
  );
};

export default File;
