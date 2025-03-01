import './hero.scss';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 5,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// const scrollButtonVariants = {
//   initial: {
//     opacity: 1,
//     y: 0,
//   },
//   animate: {
//     y: [0, -10, 0], // Animate up and down
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-290%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Qianjun (Cheryl) Liang's Portfolio
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full-Stack Developer | Product Manager
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a href="#Portfolio">
              <motion.button
                variants={textVariants}
                style={{
                  background: "orange",
                  color: "black",
                  fontWeight: "bold",
                  border: "orange",
                }}
              >
                See my Latest Work
              </motion.button>
            </a>
            <a
              href="Qianjun Liang_Resume_Full-Stack Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button variants={textVariants}>
                Download Resume
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            className="scrollButton"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full-Stack Development
      </motion.div>
      <div className="imageContainer">
        <img src="/header-img.svg" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
