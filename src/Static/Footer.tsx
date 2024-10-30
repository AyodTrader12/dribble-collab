import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/pics/drip.png";

const myFooterTopNavs = [
  {
    id: 1,
    nav: "For designers",
  },
  {
    id: 2,
    nav: "Hire Talent",
  },
  {
    id: 3,
    nav: "Inspiration",
  },
  {
    id: 4,
    nav: "Advertising",
  },
  {
    id: 5,
    nav: "Blog",
  },
  {
    id: 6,
    nav: "About",
  },
  {
    id: 7,
    nav: "Careers",
  },
  {
    id: 8,
    nav: "Support",
  },
];
const myFooterBottomNavs2 = [
  {
    id: 1,
    nav: "Jobs",
  },
  {
    id: 2,
    nav: "Designers",
  },
  {
    id: 3,
    nav: "Freelancers",
  },
  {
    id: 4,
    nav: "Tags",
  },
  {
    id: 5,
    nav: "Places",
  },
  {
    id: 6,
    nav: "Resources",
  },
];
const myFooterBottomNavs1 = [
  {
    id: 1,
    nav: "@2024 Dribbble",
  },
  {
    id: 2,
    nav: "Terms",
  },
  {
    id: 3,
    nav: "Privacy",
  },
  {
    id: 4,
    nav: "Cookies",
  },
];
const Footer = () => {
  return (
    <div>
      <div className="w-full h-[30vh] flex justify-center items-center ">
        <div className="w-[90%] h-full flex flex-col">
          <div className="flex justify-between items-center">
            <img src={logo} alt="" />
            <div className="flex gap-10">
              {myFooterTopNavs?.map((el) => (
                <div className="flex gap-3 text-[14px] font-semibold">
                  {el?.nav}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <FaTwitter className="w-5 h-5" />
              <FaFacebook className="w-5 h-5" />
              <FaInstagram className="w-5 h-5" />
              <FaPinterest className="w-5 h-5" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-24">
            <div className="flex gap-2">
              {myFooterBottomNavs1?.map((el) => (
                <div className="text-[15px] text-slate-500">{el?.nav}</div>
              ))}
            </div>
            <div className="flex gap-2">
              {myFooterBottomNavs2?.map((el) => (
                <div className="text-[15px] text-slate-500">{el.nav}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
