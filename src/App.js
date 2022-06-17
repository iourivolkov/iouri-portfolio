import "./App.css";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

function App() {
  const mainTitle = "Hello 👋🏻";
  const aboutTitle = "Me, Myself & I";

  return (
    <div className="App">
      <Navigation />
      <LandingPage mainTitle={mainTitle} a />
      <About aboutTitle={aboutTitle} />
    </div>
  );
}

export default App;
