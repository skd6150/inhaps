import { useState, useEffect } from "react";
import { throttle } from "lodash";
import styles from "../styles/header.module.css";

const getWindowWidth = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const Header = () => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth().innerWidth);
    };
    handleResize();
    const throttledHandleResize = throttle(handleResize, 50);
    window.addEventListener("resize", throttledHandleResize);
    return () => window.removeEventListener("resize", throttledHandleResize);
  }, []);

  return (
    <header className={styles.headerWrapper}>
      <div
        className={styles.header}
        style={{
          clipPath: `path("M0,0 V 100 Q${width / 2},180 ${width},100 V -100")`,
        }}
      >
        <h1 className={styles.title}>Lorem Ipsum</h1>
      </div>
    </header>
  );
};

export default Header;
