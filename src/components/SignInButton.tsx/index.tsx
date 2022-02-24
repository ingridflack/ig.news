import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const SignInButton = () => {
  const isUserLoggedIn = true;

  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub color={isUserLoggedIn ? "#04d361" : "#eba417"} />
      {isUserLoggedIn ? (
        <>
          Ingrid Flack <FiX color="#737388" className={styles.closeIcon} />
        </>
      ) : (
        "Sign in with Github"
      )}
    </button>
  );
};

export default SignInButton;
