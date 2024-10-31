import animation from "../assets/secondsliderpics/animation.png";
import branding from "../assets/secondsliderpics/branding.png";
import illustration from "../assets/secondsliderpics/illustration.png";
import mobile from "../assets/secondsliderpics/mobile.png";
import print from "../assets/secondsliderpics/Print.jpeg";
import Product from "../assets/secondsliderpics/ProductDesign.png";
import typography from "../assets/secondsliderpics/typography.jpeg";
import webdesign from "../assets/secondsliderpics/webdesign.png";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure"; // Ensure you import this hook

// Image array with unique IDs
const images = [
  { id: 1, picture: animation, note: "Animation" },
  { id: 2, picture: branding, note: "Branding" },
  { id: 3, picture: illustration, note: "Illustration" },
  { id: 4, picture: mobile, note: "Mobile" },
  { id: 5, picture: print, note: "Print" },
  { id: 6, picture: Product, note: "Product Design" },
  { id: 7, picture: typography, note: "Typography" },
  { id: 8, picture: webdesign, note: "Web Design" },
];

// Main component
const SecondSlider = () => {
  const [ref, { width }] = useMeasure(); // Measure the container width
  const xMovement = useMotionValue(0);

  const FAST = 60; // Animation speed by default
  const [duration, setDuration] = useState(FAST); // Control animation speed
  const [render, setRender] = useState(false); // To re-render after each loop
  const [isPaused, setIsPaused] = useState(false); // Track hover state to pause animation

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    let control;

    if (!isPaused) {
      control = animate(xMovement, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        repeatType: "loop",
        onRepeat: () => {
          xMovement.set(finalPosition); // Reset position after each loop
        },
      });
    } else {
      control?.stop();
    }

    return () => control?.stop();
  }, [xMovement, width, duration, render, isPaused]);

  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        onHoverStart={() => setIsPaused(true)} // Pause animation on hover
        onHoverEnd={() => setIsPaused(false)} // Resume animation when hover ends
        ref={ref}
        style={{ x: xMovement }}
        className="flex w-max gap-4"
      >
        {Array.from({ length: 8 }, () => images).map((el, index) =>
          el.map((img, i) => <Card key={`${index}-${i}`} el={img} />)
        )}
      </motion.div>
    </div>
  );
};

export default SecondSlider;

interface iProps {
  el: { id: number; picture: string; note: string };
}

const Card: React.FC<iProps> = ({ el }) => {
  return (
    <motion.div
      whileHover={{ boxShadow: "0px 0px 7px 4px rgba(0, 0, 0, 0.2)" }} // Only box shadow on hover
      className=" overflow-hidden rounded-md w-[200px] h-[200px] cursor-pointer relative"
    >
      <div className="">
        <img
          src={el.picture}
          alt={el.note}
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="text-[13px] font-bold mt-2">{el.note}</p>
      </div>
    </motion.div>
  );
};
