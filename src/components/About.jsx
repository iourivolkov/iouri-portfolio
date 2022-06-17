const About = ({ aboutTitle }) => {
  return (
    <div>
      <section className="about-heading">
        <h1 className="about-title">{aboutTitle}</h1>
        <p>
          I am a Fullstack Developer based in Toronto, Canada. I have a passion
          for blockchain technology, UI effects, and creative intuitive, dynamic
          user experiences.
          <br />
          Well organized person, problem solver, independent employee with high
          attention to detail.
          <span className="about-special">Let's make something special.</span>
        </p>
      </section>
      <section></section>
    </div>
  );
};

export default About;
