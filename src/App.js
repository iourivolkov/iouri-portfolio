import LandingPage from "../src/components/LandingPage";
import About from "./components/About";

const landingPage = {
  title: "Hello. I'm a full-stack developer.",
  subtitle:
    "My name is Iouri Volkov. I design intuitive interfaces and produce clean code using modern web technologies.",
};

function App() {
  return (
    <div className="App">
      <LandingPage title={landingPage.title} subtitle={landingPage.subtitle} />
      <About />
    </div>
  );
}

export default App;
