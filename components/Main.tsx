import Image from "next/image";
import headshot from "../public/finalheadshotedit.png";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Main = () => {
  return (<div className={styles.content}>
      <aside className={styles.side}>
        <Image
          id="pictureImage"
          className={styles["picture-image"]}
          src={headshot}
          alt="Portrait of Urbano Baz"
        />
      </aside>
      <main className={styles.about}>
        <h1 className={styles.name}>Hi, I'm Urbano Baz</h1>
        <p className={styles.job}>Software Engineer</p>
        <hr className={styles.hr} />
        <div className={styles.description}>
          <p>
            I am a software engineer and instructor who loves creating UIs with
            React.
          </p>
        </div>
        <div className={styles.contact}>
          <a className={styles.button} href="mailto:urbanobaz@yahoo.com">
            Get in touch
          </a>
        </div>
        <ul className={styles.social} id="social">
          <li>
            <a className={styles.link} href="https://twitter.com/ubaz_3">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com/urbanobaz">
              <i className="fab fa-github"></i>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/urbanobaz"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Main;
