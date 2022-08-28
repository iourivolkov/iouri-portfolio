import LandingPage from "../src/components/LandingPage";
import About from "./components/About";

const landingPage = {
  heading: "👋🏻 Hello! I'm Iouri, a ",
  title: "Full-Stack developer based in Toronto 📍",
  subtitle:
    "I design intuitive interfaces and produce clean code using modern web technologies.",
};

function App() {
  return (
    <div className="App">
      <LandingPage
        heading={landingPage.heading}
        title={landingPage.title}
        subtitle={landingPage.subtitle}
      />
      <About />
    </div>
  );
}

export default App;
