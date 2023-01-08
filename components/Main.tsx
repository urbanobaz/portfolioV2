/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import headshot from '../public/finalheadshotedit.png'
import styles from '../styles/Home.module.css'

const Main = () => {
return (<div className={styles.content}>
        <aside className={styles.side}>
          {/* <figure id="picture" className={styles.picture}>
            <div className={styles['picture-shadow']} /> */}
            <Image
              id="pictureImage"
              className={styles['picture-image']}
              src={headshot}
              alt="Portrait of Urbano Baz"
            />
          {/* </figure> */}
        </aside>
        <main className={styles.about}>
          <h1 className={styles.name}>Hi, I'm Urbano Baz</h1>
          <p className={styles.job}>Software Engineer</p>
          <hr className={styles.hr} />
          <div className={styles.description}>
            <p>
              I am a software engineer and instructor who loves creating UIs
              with React.
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
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className={styles.link} href="https://github.com/urbanobaz">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className={styles.link} href="https://www.linkedin.com/in/urbanobaz">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </main>
      </div>)
}

export default Main;