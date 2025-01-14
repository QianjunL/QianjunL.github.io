import "./portfolio.scss";
import React from "react";
import heroImage from "/stars.png";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Full-stack Ecommerce System",
    video:
      "https://drive.google.com/file/d/1xClzy7emC2Z14BINBoUlvM_SZK674sNt/preview",
    tech: "React, Next.js, NextAuth.js, AWS3, Tailwind CSS, MongoDB, Axios, Stripe",
    desc: "The client side implemented major workflow features including Google Signon, products, cart, order, payment, profile, while the admin side implemented data analysis and product/category/order management.",
    howTo: [],
    url: "https://github.com/qianjun-ql/ecommerce-admin",
    url2: "https://github.com/QianjunL/ecommerce-front",
  },
  {
    id: 2,
    title: "MERN Doctor Appointment Website",
    video:
      "https://drive.google.com/file/d/1xUCXEhn2wG9I6PTIhvJ5EpihI2yGkWpO/preview",
    desc: "A full-stack website including user registration and login modules, user information management, 2 sets of separate access controls, and a booking and payment system. This website allows users and doctors to login and manger their info separately, ",
    tech: "React, Express.js, MongoDB, Node.js, Tailwind CSS, Cloudinary, Stripe",
    url: "https://github.com/qianjun-ql/doctor-appointment",
  },
  // {
  //     id: 3,
  //     title: "Blog app",

  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
  //     tech: "Angular.js, Firebase, ",
  //     url: "https://github.com/Cheryl-LL",
  // },
  // {
  //     id: 4,
  //     title: "Full-Stack Library Management System",

  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
  //     tech: "react.js, node.js, MongoDB, ",
  //     url: "https://github.com/Cheryl-LL",
  // },
  // {
  //     id: 5,
  //     title: "Full stack library management system",

  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo sint necessitatibus cum asperiores quisquam saepe voluptatem in vitae similique, incidunt consectetur maxime enim neque suscipit eaque expedita? Voluptate, nemo.",
  //     url: "https://github.com/Cheryl-LL",
  // },
  {
    id: 6,
    title: "Blog App and Admin Portal",
    video:
      "https://drive.google.com/file/d/1LEdHMeXcDdLXV3xsUmxtGriJ37FlohHs/preview",
    tech: "Angular, Firebase, TypeScript, bootstrap, rxJS, Angular Editor",
    desc: "The blog system consists of the client side and the admin side. The admin site allows admins to add a post category, add/edit a post, and manage subscription list. The client side allows users to view posts based on category and recommended posts, leave and show feedback, and subscribe to the website.",
    url: "https://github.com/qianjun-ql/angular-blog-admin",
    url2: "https://github.com/qianjun-ql/angular-blog-app",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const y = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <iframe
            className="iframe"
              src={item.video}
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>Key Accomplishments: {item.desc}</p>
            <p>Technology Stack: {item.tech}</p>
            <div>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <button>Github Code</button>
              </a>
              {item.url2 && (
                <a href={item.url2} target="_blank" rel="noopener noreferrer">
                  <button>Github Code Client Side</button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
