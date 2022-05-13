import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <span className={style.author}>
        © {new Date().getFullYear()} powered by{" "}
        <a href="https://github.com/caputdraconis050630">caputdraconis</a>,{" "}
        <a href="https://github.com/skd6150">skd6150</a>
      </span>
    </footer>
  );
};

export default Footer;
