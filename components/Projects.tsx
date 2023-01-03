/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import cs50x from '../public/images/cs50x.jpeg'
import googleit from '../public/images/googleit.jpeg'
import books from '../public/images/books.jpeg'
import portfolio from '../public/images/portfolio.jpeg'


const Projects = () => {
  return (
    <section className="projects">
        <h1 className="section-heading">Projects</h1>
        <div className="project-cards">
          <div className="project-cards-wrapper">
            <div className="card">
                <Image src={cs50x} alt="headshot" className="card-image" />
                <div className="container">
                  <h2>
                    <b>Project 1: CS50x Website</b>
                  </h2>
                  <p>
                    <strong>Info:</strong> Website built for CS50x at Miami Dade
                    College.
                  </p>
                  <p>
                    <strong>Technologies used:</strong> Python (Flask) on the
                    backend. HTML, CSS, JavaScript on the frontend. Jinja as
                    Flask's templating language. Bootstrap as the CSS framework
                    for styling. Heroku for hosting.
                  </p>
                </div>
            </div>

            <div className="card">
                <Image src={googleit} alt="headshot" className="card-image" />
                <div className="container">
                  <h2>
                    <b>Project 2: Google IT Website</b>
                  </h2>
                  <p>
                    <strong>Info:</strong> Website built for Google IT:
                    Automation with Python course at Miami Dade College.
                  </p>
                  <p>
                    <strong>Technologies used:</strong> Python (Flask) on the
                    backend. HTML, CSS, JavaScript on the frontend. Jinja as
                    Flask's templating language. Bootstrap as the CSS framework
                    for styling. Heroku for hosting.
                  </p>
                </div>
            </div>

            <div className="card">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.github.com/urbanobaz/booksv2"
              >
                <Image src={books} alt="headshot" className="card-image" />
                <div className="container">
                  <h2>
                    <b>Project 3: Books & More</b>
                  </h2>
                  <p>
                    <strong>Info:</strong> Personal project to keep track of
                    some of the books that I had read.
                  </p>
                  <p>
                    <strong>Technologies used:</strong> React (NextJS) on the
                    front end, API call to the Google books page to add books.
                    Custom cards using the Next framework's initial page style.
                  </p>
                </div>
              </a>
            </div>

            <div className="card">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://urbanobaz.com"
              >
                <Image
                  src={portfolio}
                  alt="headshot"
                  className="card-image"
                />
                <div className="container">
                  <h2>
                    <b>Project 4: Portfolio Page</b>
                  </h2>
                  <p>
                    <strong>Info: </strong>Website highlighting some projects
                    and a little bit more about me. Hosted using Netlify.
                  </p>
                  <p>
                    <strong>Technologies used:</strong> React (Gatsby) on the
                    front end.
                  </p>
                </div>
              </a>
            </div>

            {/* {projects.map((project, index) => {
            return <Card props={project} key={index} />
          })} */}
          </div>
        </div>
      </section>
  );
}

export default Projects;