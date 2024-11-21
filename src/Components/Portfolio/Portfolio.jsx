import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const items = [

  {
    id: 1,
    name: "Agrowgrad",
    desc: "Agrowgrad, a website built for new age farmers solving their problems ",
    img: "/agrowgrad.png",
    link: <a href="https://agrowgrad.com" />,
  },

  {
    id: 2,
    name: "NexviewGPT",
    desc: "A Modern video streaming platform with latest and popular Movies & TV Shows",
    img: "/nexviewgpt.png",
    link: <a href="https://nexviewgpt.web.app/" />,
  },

  {
    id: 3,
    name: "Image Gallery Web App",
    desc: "An images gallry web app that lets you view, share & download images",
    img: "/imagegallery.png",
    link: <a href="https://image-gallery-saurav.netlify.app/" />,
  },

  {
    id: 4,
    name: "Modern Landing Page",
    desc: "Modern & Aesthetic but simple landing page built using Html, Css & Js",
    img: "/page.png",
    link: <a href="https://modern-landing-page-saurav.netlify.app/" />,
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleDemoClick = () => {
    if (item.link && item.link.props.href) {
      // Redirect to the specified link when the "Demo" button is clicked
      window.location.href = item.link.props.href;
    }
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="image" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <button onClick={handleDemoClick}>Demo</button>
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

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
