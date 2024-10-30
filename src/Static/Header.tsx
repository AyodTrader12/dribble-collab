import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/pics/drip.png";
import { MdSearch } from "react-icons/md";

interface iHeader {
  id: number;
  nav: string;
  icon: any;
}

const headerNavs: iHeader[] = [
  {
    id: 1,
    nav: "Explore",
    icon: FaAngleDown,
  },
  {
    id: 2,
    nav: "Hire a designer",
    icon: FaAngleDown,
  },
  {
    id: 3,
    nav: "Find jobs",
    icon: undefined,
  },
  {
    id: 4,
    nav: "Blog",
    icon: undefined,
  },
];

const Header = () => {
  return (
    <div>
      <div className="w-full h-[90px] flex justify-center items-center">
        <div className="w-[94%] h-full flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="bg-[#F3F3F6] h-[60%] w-[40%] rounded-full flex justify-between pl-4 pr-2">
            <div className="flex justify-between items-center">
              <input
                className="bg-transparent flex items-center outline-none text-[13px]"
                type="text"
                placeholder="What are you looking for?"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="font-semibold">Shots</p>
              <FaAngleDown />
              <div className="bg-red-600 rounded-[100%] w-10 h-10 flex justify-center items-center">
                <MdSearch className="text-white text-[30px]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            {headerNavs?.map((el) => (
              <div className="flex items-center cursor-pointer hover:opacity-50">
                <div className="text-[14px] font-bold">{el.nav}</div>
                <FaAngleDown className="mt-[1px]" />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <button className="bg-transparent">Sign up</button>
            <button className="bg-black text-white font-semibold px-5 py-3 rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
