import animation from "../assets/secondsliderpics/animation.png";
import branding from "../assets/secondsliderpics/branding.png";
import illustration from "../assets/secondsliderpics/illustration.png";
import mobile from "../assets/secondsliderpics/mobile.png";
import print from "../assets/secondsliderpics/Print.jpeg";
import Product from "../assets/secondsliderpics/ProductDesign.png";
import typography from "../assets/secondsliderpics/typography.jpeg";
import webdesign from "../assets/secondsliderpics/webdesign.png";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
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

  const SLOW = 80; // Slower speed on hover
  const FAST = 30; // Faster speed by default

  const [duration, setDuration] = useState(FAST); // Control animation speed
  const [finished, setFinished] = useState(false); // To toggle animation state
  const [render, setRender] = useState(false); // To re-render after each loop

  useEffect(() => {
    let control;
    const finalPosition = -width / 2 - 8;

    if (finished) {
      // Smooth transition to final position
      control = animate(xMovement, [xMovement.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xMovement.get() / finalPosition),
        onComplete: () => {
          setRender(!render);
          setFinished(false);
        },
      });
    } else {
      // Looping animation for continuous scroll
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
    }

    return () => control?.stop();
  }, [xMovement, width, duration, render, finished]);

  return (
    <div className="overflow-hidden mt-10">
      <motion.div
        onHoverStart={() => {
          setDuration(SLOW); // Slow down on hover
          setFinished(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST); // Resume speed after hover
          setFinished(false);
        }}
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
  el: { id: number; picture: string; note: string }; // Update to reflect the actual structure
}

const Card: React.FC<iProps> = ({ el }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="border overflow-hidden rounded-md w-[300px] h-[600px] cursor-pointer relative"
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute h-full w-full flex justify-center items-center"
          >
            <div className="absolute inset-0 h-full w-full bg-black opacity-45 top-0 left-0 z-20" />
            <motion.div
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
              className="w-[80%] h-[100px] rounded-md bg-white p-2 z-40"
            >
              {el.note} {/* Use note for meaningful text */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <img
        src={el.picture}
        alt={el.note}
        className="w-full h-full object-cover"
      />{" "}
      {/* Use meaningful alt text */}
    </motion.div>
  );
};
