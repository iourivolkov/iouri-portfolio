const Navigation = () => {
  return (
    <div>
      <ul className="nav-links">
        <section>
          <li id="logo">VLKV</li>
        </section>
        <section className="links">
          <li className="about">ABOUT</li>
          <li className="work">WORK</li>
          <li className="contact">CONTACT</li>
          <a href="https://resume.creddle.io/resume/97btmd5nf85">
            <button className="resume">RESUME</button>
          </a>
        </section>
      </ul>
    </div>
  );
};

export default Navigation;
