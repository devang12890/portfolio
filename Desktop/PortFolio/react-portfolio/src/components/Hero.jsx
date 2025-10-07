import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-container reveal">
          <div className="hero-content">
            <h1>
              Hello, I'm <span className="highlight">Devang</span>
            </h1>
            <p className="subtitle">Backend Developer</p>
            <p className="description">
              I'm a skilled web developer with experience in Java and expertise in frameworks like Spring. 
              I am a quick learner and want to collaborate with someone to make efficient, scalable solutions 
              that solve real-world problems.
            </p>
            <div className="cta-buttons">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-primary"
              >
                View My Work
              </Link>
            <a
              href="/Resume.pdf"
              className="btn btn-secondary"
              download
            >
              Download CV
            </a>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn btn-secondary"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="/devang.jpg" alt="Devang Awasthi" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
