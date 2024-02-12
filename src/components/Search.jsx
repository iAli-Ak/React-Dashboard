import React from "react";
import { CiSearch } from "react-icons/ci";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { setSearchBar } = useStateContext();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-black/25 backdrop-blur-sm w-screen fixed top-0 left-0 z-50">
      <div className="bg-[#edf2ef] dark:bg-[#484B52] w-full h-full transform -translate-x-0 transition duration-300 ease-in-out">
        <div className="flex justify-between items-center p-4 ml-4">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full py-2 pl-10 pr-4 leading-tight text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:shadow-outline"
              placeholder={`Search here...`}
            />
            <div className="absolute top-0 left-0 mt-2 ml-2">
              <CiSearch />
            </div>
          </div>
          <TooltipComponent content="Close" position="BottomCenter">
            <button
              type="button"
              onClick={() => {
                setSearchBar(false);
              }}
              style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
              className="ml-3 text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <MdOutlineCancel style={{ color: "rgb(153, 171, 180)" }} />
            </button>
          </TooltipComponent>
        </div>
      </div>
    </div>
  );
};

export default Search;