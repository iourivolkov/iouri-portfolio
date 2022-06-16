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
          <button className="resume">RESUME</button>
        </section>
      </ul>
    </div>
  );
};

export default Navigation;
