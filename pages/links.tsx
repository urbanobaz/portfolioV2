import Image from "next/image";
import React from "react";
import headshot from "finalheadshotedit.png";
import styles from "../styles/Links.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Links = () => {
    return (<div className={styles['link-container']}>
    <div className={styles['link-list-container']}>
      <div className={styles['link-list-container']}>
        <a className={styles['link-button']} href="https://urbanobaz.com">
          Portfolio <FontAwesomeIcon icon={faUser} className={styles['icon']} />
        </a>
        <a
          className={styles['link-button']}
          href="https://linkedin.com/in/urbanobaz"
        >
          LinkedIn <FontAwesomeIcon icon={faLinkedinIn} className={styles['icon']} />
        </a>
        <a className={styles['link-button']} href="https://twitter.com/ubaz_3">
          Twitter <FontAwesomeIcon icon={faTwitter} className={styles['icon']} />
        </a>
      </div>
    </div>
    <div className={styles['link-picture']}>
      <figure id="picture" className={styles['picture']}>
        <Image
          id="pictureImage"
          className={styles['picture-image']}
          src={headshot}
          alt="Portrait of Urbano Baz"
          width="320"
          height="320"
        />
      </figure>
    </div>
  </div>
  );   
};

export default Links;