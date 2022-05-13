import { useState, useEffect } from "react";
import { throttle } from "lodash";
import styles from "../styles/header.module.css";

const getWindowWidth = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const Header = () => {
  const [width, setWidth] = useState<number>(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWindowWidth().innerWidth);
      // setHeaderHeight(getWindowWidth().innerWidth > 375 ? 230 : 150);
      setHeaderHeight(100);
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
          clipPath: `path("M0,0 V ${headerHeight} Q${width / 2},${
            headerHeight + 80
          } ${width},${headerHeight} V -${headerHeight}")`,
        }}
      >
        <h1 className={styles.title}>Lorem Ipsum</h1>
      </div>
    </header>
  );
};

export default Header;
