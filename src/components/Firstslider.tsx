import Andrea from "../assets/firstsliderpics/Andrea Jelic.png";
import Salomon from "../assets/firstsliderpics/Aurelien-Salomon.png";
import Chris from "../assets/firstsliderpics/Chris-Owens.jpeg";
import Daniele from "../assets/firstsliderpics/daniele-buffa-3.png";
import Elif from "../assets/firstsliderpics/Elif-Kamesoghu.jpeg";
import Lilian from "../assets/firstsliderpics/Lilian-Bardenova.png";
import Mercedes from "../assets/firstsliderpics/mercedes-bazan (1).webp";
import Victa from "../assets/firstsliderpics/Victa-Wille.jpeg";
import Vladimir from "../assets/firstsliderpics/Vladimir_Gruev.png";
import Helen from "../assets/firstsliderpics/HelenTran.mp4";
import Jesse from "../assets/firstsliderpics/JesseShowwalter.mp4";
import Dan from "../assets/firstsliderpics/DanMall.mp4";
import { motion } from "framer-motion";

interface iProps {
  picture: string;
  Name: string;
  text1: string;
  tags: [string, string, any];
}

const images: iProps[] = [
  {
    picture: Andrea,
    Name: "Andrea Jelic",
    text1: "Digital designer",
    tags: ["Brand", "UI", "web"],
  },
  {
    picture: Salomon,
    Name: "Aurelien Salomon",
    text1: "Digital director",
    tags: ["Design", "Product", "UX"],
  },
  {
    picture: Chris,
    Name: "Chris Owen",
    text1: "Creative director",
    tags: ["Illustration", "Mobile", "UI"],
  },
  {
    picture: Daniele,
    Name: "Daniele Buffa",
    text1: "Principal designer",
    tags: ["Animation", "UI", "Visual"],
  },
  {
    picture: Elif,
    Name: "Elif Kamesoghu",
    text1: "Brand designer",
    tags: ["Brand", "Illustration", "web"],
  },
  {
    picture: Lilian,
    Name: "Lilian Bardenova",
    text1: "Brand+Illustrator",
    tags: ["Brand", "Illustration", "web"],
  },
  {
    picture: Mercedes,
    Name: "Mercedes Bazan",
    text1: "Illustrator",
    tags: ["Graphic Design", "Illustration", null],
  },
  {
    picture: Victa,
    Name: "Victa Wille",
    text1: "Digital designer",
    tags: ["Mobile", "UI", "web"],
  },
  {
    picture: Vladimir,
    Name: "Vladimir Gruev",
    text1: "Digital designer",
    tags: ["Brand", "Design", null],
  },
  {
    picture: Helen,
    Name: "Helen Tran",
    text1: "Lead product designer",
    tags: ["Leadership", "Product", "UX"],
  },
  {
    picture: Jesse,
    Name: "Jesse Showalter",
    text1: "Digital Educator",
    tags: ["UI", "web", "mobile"],
  },
  {
    picture: Dan,
    Name: "Dan Mall",
    text1: "Digital Educator",
    tags: ["Product", "UX", null],
  },
];

const video = [];

const Firstslider = () => {
  return (
    <div className="overflow-hidden w-full h-80 relative">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: images.length * 2,
          ease: "linear",
        }}
        style={{ x: 0 }}
      >
        {[...images, ...images, ...images, ...images].map((profile, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-72 h-80 bg-white rounded-lg shadow-lg overflow-hidden mx-4 relative"
          >
            <div
              className="w-full h-full rounded-2xl"
              style={{
                backgroundImage: `url(${profile.picture})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="p-4">
                <h3 className="text-lg text-[13px] font-semibold text-white mt-44">
                  {profile.Name}
                </h3>
                <p className="text-white text-sm">{profile.text1}</p>
                <div className="flex gap-2 mt-3">
                  {profile.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs border border-white font-medium text-white px-2 py-1 rounded-full text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Firstslider;
