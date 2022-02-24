import Image from "next/image";
import SignInButton from "../SignInButton.tsx";

import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width={112} height={38} />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};

export default Header;
