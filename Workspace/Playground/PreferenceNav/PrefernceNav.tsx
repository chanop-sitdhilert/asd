import React from "react";
import { AiOutlineFullscreen } from "react-icons/ai";

type PreferenceNavProps = {};

const PreferenceNav: React.FC<PreferenceNavProps> = () => {
  return (
    <div className="flex items-center justify-between bg-amber-700 h-11 w-full">
        
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2 px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-label-2 dark:text-dark-label-2">
              Python
            </div>
          </div>
        </button>
      </div>

      <button className="relative rounded px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex ml-auto p-1 mr-2 hover:bg-dark-fill-3 group">
        <button className="preferenceBtn">
          <div className="h-4 w-4 text-dark-gray-6 font-bold text-lg">
            <AiOutlineFullscreen />
          </div>
          <div className="absolute w-auto p-2 text-sm m-2 min-w-max translate-x-3 right-0 top-5 z-10 rounded-md shadow-md text-dark-layer-2 bg-amber-700 origin-center scale-0 transition-all duration-100 ease-linear group-hover:scale-100">
            Full Screen
          </div>
        </button>
      </button>
    </div>
  );
};

export default PreferenceNav;
